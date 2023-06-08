import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Avatar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import UserContext from "../context/user";

const NavBar = () => {
  const userCtx = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.appName}>Motozilla Marketplace</div>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 50, height: 50 }} />
      </div>
      <div className={styles.cart}>
        <Link to={`/cart/${userCtx.cartID}`}>
          <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
