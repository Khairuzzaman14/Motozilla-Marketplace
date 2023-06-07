import React, { useState, useRef, useEffect } from "react";
import { fetchData } from "../helpers/common";
import styles from "./ItemPage.module.css";

const ItemPage = (props) => {
  const [item, setItem] = useState({});
  //   const itemRef = useRef();
  const getOneItem = async () => {
    const { ok, data } = await fetchData("/project/items", undefined, "POST", {
      itemID: 18,
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
          <button className="col-sm-1">Buy Item</button>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
