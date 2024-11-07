"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import HomeIcon from "./icons/HomeIcon";
import KidGokuIcon from "./icons/KidGokuIcon";
import useAuthStore from "@/stores/authStore";
import { headerRoutes } from "@/constants/headerRoutes";


const HeaderOptions = () => {
  const pathname = usePathname();
  const {user, _hasHydrated} = useAuthStore()

  const filterRoutes = headerRoutes.filter(route => {
    if (!_hasHydrated) {
      return route.isAlwaysVisible
    }
    return user?.id ? route.isAlwaysVisible : route
  })

  return <>
    {
      filterRoutes.map(route => {
        return <li key={route.path}>
        <Link
          href={route.path}
          className={pathname === route.path ? styles.active : ""}
        >
          {route.label}
        </Link>
      </li>
      })
    }
  </>
}

const Navbar: React.FC = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/"><HomeIcon/> <KidGokuIcon className={styles.kidGoku}/></Link>
      </div>
      <div className={styles.navbarNav}>
        <nav>
          <ul>
            <HeaderOptions/>
            {/* {
              _hasHydrated && 
            }
            {
              !id && 
            }
            {
              !id && 
            } */}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
