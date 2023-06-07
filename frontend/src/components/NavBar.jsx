import React from "react";
import styles from "./NavBar.module.css";
import { Avatar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.appName}>Motozilla Marketplace</div>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 50, height: 50 }} />
      </div>
      <div className={styles.cart}>
        <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
      </div>
    </header>
  );
};

export default NavBar;
