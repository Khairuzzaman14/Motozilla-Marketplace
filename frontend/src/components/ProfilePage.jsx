import React, { useContext } from "react";
import styles from "./ProfilePage.module.css";
import UserContext from "../context/user";
import { Avatar } from "@mui/material";
import { Link, Navigate } from "react-router-dom";

const ProfilePage = (props) => {
  const userCtx = useContext(UserContext);
  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className={styles.ItemDisplay}>
        <Avatar style={{ width: 250, height: 250 }} />

        <div className={styles.ItemDetails}>
          <div className={styles.ItemBox}>
            <div className={styles.ItemName}>Name:</div>
            <div className={styles.ItemName2}>
              {userCtx.firstName}
              <br />
              {userCtx.lastName}
            </div>
            <div className={styles.Price}>ID:</div>
            <div className={styles.Price2}>{userCtx.userID}</div>
            <div className={styles.Type}>Email:</div>
            <div className={styles.Type2}>{userCtx.email}</div>
            <div className={styles.Seller}>Password:</div>
            <div className={styles.Seller2}>********</div>
          </div>
        </div>
      </div>
      <div className={styles.DescriptionBox}>
        <div className={styles.Description}>Items Listed:</div>

        <div className={styles.Description2}></div>
        <br />
        <br />
        <div className={styles.Description}>Items Bought:</div>
        <div className={styles.Description2}></div>
        <br />
        <br />
        <Link to="/listItem">
          <button className="col-sm-1">List Item</button>
        </Link>
        <br />
        <br />
      </div>
    </>
  );
};

export default ProfilePage;
