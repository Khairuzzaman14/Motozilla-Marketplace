import React, { useContext, useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import UserContext from "../context/user";
import { Avatar } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { fetchData } from "../helpers/common";

const ProfilePage = () => {
  const userCtx = useContext(UserContext);
  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }
  const [sellerItems, setSellerItems] = useState([]);
  const [buyerItems, setBuyerItems] = useState([]);
  const getSellerItems = async () => {
    const body = {
      sellerID: userCtx.userID,
    };
    const { ok, data } = await fetchData(
      "/project/selleritems",
      undefined,
      "POST",
      body
    );

    if (ok) {
      setSellerItems(data);

      console.log(ok);
    } else {
      console.log(data);
    }
  };
  const getBuyerItems = async () => {
    const body = {
      buyerID: userCtx.userID,
    };
    const { ok, data } = await fetchData(
      "/project/buyeritems",
      undefined,
      "POST",
      body
    );

    if (ok) {
      setBuyerItems(data);

      console.log(ok);
    } else {
      console.log(data);
    }
  };
  const delItem = async (itemID) => {
    const body = {
      itemID: itemID,
    };
    const { ok, data } = await fetchData(
      "/project/items",
      undefined,
      "DELETE",
      body
    );

    if (ok) {
      alert("Item deleted");
      getSellerItems();
      console.log(ok);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getSellerItems();
    getBuyerItems();
  }, []);
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

        <div className={styles.Description2}>
          {sellerItems.map((item) => {
            return (
              <>
                <img src={item.imgUrl} style={{ width: 150, height: 150 }} />
                <h1>{item.name}</h1>
                <button
                  className="col-md-1"
                  onClick={() => delItem(item.itemID)}
                >
                  Delete
                </button>
                <Link to={`/home/${item.itemID}`} className="col-sm-1">
                  <button className="col-sm-12">view</button>
                </Link>
              </>
            );
          })}
        </div>
        <br />
        <br />
        <div className={styles.Description}>Items Bought:</div>
        <div className={styles.Description2}>
          {buyerItems.map((item) => {
            return (
              <>
                <img src={item.imgUrl} style={{ width: 150, height: 150 }} />
                <h1>{item.name}</h1>
                <Link to={`/home/${item.itemID}`} className="col-sm-1">
                  <button className="col-sm-12">view</button>
                </Link>
              </>
            );
          })}
        </div>
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
