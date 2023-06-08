import React from "react";
import styles from "./CartPageItems.module.css";

const CartPageItems = (props) => {
  return (
    <>
      <div className={styles.ItemDisplay}>
        {/* <div className={styles.img}> */}
        <img src={props.item.imgUrl} style={{ width: 250, height: 250 }} />
        {/* </div> */}

        <div className={styles.ItemDetails}>
          <div className={styles.ItemBox}>
            <div className={styles.ItemName}>Item Name:</div>
            <div className={styles.ItemName2}>{props.item.name}</div>
            <div className={styles.Price}>Price:</div>
            <div className={styles.Price2}>${props.item.price}</div>
            <div className={styles.Type}>Type:</div>
            <div className={styles.Type2}>{props.item.type}</div>
            <div className={styles.Seller}>Seller:</div>
            <div className={styles.Seller2}>{props.item.sellerID}</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.DescriptionBox}>
          <div className={styles.Description}>Description</div>
          <div className={styles.Description2}>{props.item.description}</div>
          <br />
          <br />
          <br />
          <button className="col-sm-1">Delete from cart</button>
        </div>
      </div>
    </>
  );
};

export default CartPageItems;
