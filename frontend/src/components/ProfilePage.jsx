import React, { useContext } from "react";
import styles from "./ProfilePage.module.css";
import UserContext from "../context/user";
import { Avatar } from "@mui/material";

const ProfilePage = (props) => {
  const userCtx = useContext(UserContext);

  return (
    <>
      <div className={styles.ItemDisplay}>
        {/* <div className={styles.img}> */}
        {/* <img src={item.imgUrl} style={{ width: 250, height: 250 }} /> */}
        <Avatar style={{ width: 250, height: 250 }} />

        {/* </div> */}

        <div className={styles.ItemDetails}>
          <div className={styles.ItemBox}>
            <div className={styles.ItemName}>Name:</div>
            <div className={styles.ItemName2}>
              {userCtx.firstName}
              {userCtx.lastName}
            </div>
            <div className={styles.Price}>ID:</div>
            <div className={styles.Price2}>{userCtx.userID}</div>
            <div className={styles.Type}>Email:</div>
            <div className={styles.Type2}>{userCtx.email}</div>
            <div className={styles.Seller}>Password:</div>
            <div className={styles.Seller2}>{userCtx.password}</div>
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
        <button className="col-sm-1">List Item</button>
        <br />
        <br />
        <button className="col-sm-1">Delete User</button>
      </div>
    </>
  );
};

export default ProfilePage;
