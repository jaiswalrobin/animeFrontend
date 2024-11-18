"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import HomeIcon from "./icons/HomeIcon";
import KidGokuIcon from "./icons/KidGokuIcon";
import useAuthStore from "@/stores/authStore";
import { headerRoutes } from "@/constants/headerRoutes";
import { useAppStore } from "@/stores/appStore";

const HeaderOptions = () => {
  const pathname = usePathname();
  const { user, _hasHydrated, logout } = useAuthStore();
  const {resetAllStores} = useAppStore()
  const router = useRouter()

  
  const handleLogout = async () => {
    try {
      await logout(); 
      resetAllStores()
      router.push('/auth/login'); 
    } catch (error) {
      console.log(error)
    }
  };

  const filterRoutes = headerRoutes.filter(route => {
    if (!_hasHydrated) return route.isAlwaysVisible;

    return route.visibilityCondition(user);
  });

  return <>
    {filterRoutes.map(route => (
      <li key={route.path}>
        <Link
          href={route.path}
          className={pathname === route.path ? styles.active : ""}
        >
          {route.label}
        </Link>
      </li>
    ))}
    {user?.id && (
      <>
        <li>
          <Link href={`/user/${user.id}`}>
            Profile
          </Link>
        </li>
        <li>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </>
    )}
  </>;
}

const Navbar: React.FC = () => {
  const {sessionExpiry, resetState} = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    const now = Date.now();

    if (sessionExpiry && parseInt(sessionExpiry) < now) {
      resetState()
      router.push('/login');
    }
  }, [sessionExpiry, router, resetState]);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/"><HomeIcon /> <KidGokuIcon className={styles.kidGoku} /></Link>
      </div>
      <div className={styles.navbarNav}>
        <nav>
          <ul>
            <HeaderOptions />
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
