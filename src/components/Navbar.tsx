"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import from next/navigation instead
import styles from "../styles/Navbar.module.css";
import HomeIcon from "./icons/HomeIcon";
import KidGokuIcon from "./icons/KidGokuIcon";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Replaces useRouter for getting current path

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/"><HomeIcon/> <KidGokuIcon className={styles.kidGoku}/></Link>
      </div>
      <div className={styles.navbarNav}>
        <nav>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? styles.active : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className={pathname === "/auth/login" ? styles.active : ""}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/auth/register"
                className={pathname === "/auth/register" ? styles.active : ""}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
