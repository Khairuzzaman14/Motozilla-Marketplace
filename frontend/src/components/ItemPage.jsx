import React, { useState, useRef, useEffect, useContext } from "react";
import { fetchData } from "../helpers/common";
import styles from "./ItemPage.module.css";
import { useParams, Navigate } from "react-router-dom";
import UserContext from "../context/user";

const ItemPage = (props) => {
  const userCtx = useContext(UserContext);

  const [item, setItem] = useState({});
  //   const itemRef = useRef();
  const params = useParams();
  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }
  const getOneItem = async () => {
    console.log("params itemID value", params.itemID);
    const { ok, data } = await fetchData("/project/items", undefined, "POST", {
      itemID: parseInt(params.itemID),

      // useParams => params.itemID after you define the dynamic Route
    });

    if (ok) {
      setItem(data);
    } else {
      console.log(data);
    }
  };
  useEffect(() => {
    getOneItem();
  }, []);
  return (
    <>
      <div className={styles.ItemDisplay}>
        {/* <div className={styles.img}> */}
        <img src={item.imgUrl} style={{ width: 250, height: 250 }} />
        {/* </div> */}

        <div className={styles.ItemDetails}>
          <div className={styles.ItemBox}>
            <div className={styles.ItemName}>Item Name:</div>
            <div className={styles.ItemName2}>{item.name}</div>
            <div className={styles.Price}>Price:</div>
            <div className={styles.Price2}>${item.price}</div>
            <div className={styles.Type}>Type:</div>
            <div className={styles.Type2}>{item.type}</div>
            <div className={styles.Seller}>Seller:</div>
            <div className={styles.Seller2}>{item.sellerID}</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.DescriptionBox}>
          <div className={styles.Description}>Description</div>
          <div className={styles.Description2}>{item.description}</div>
          <br />
          <br />
          <br />
          <button className="col-sm-1">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
