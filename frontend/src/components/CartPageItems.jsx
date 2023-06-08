import React, { useContext } from "react";
import UserContext from "../context/user";
import styles from "./CartPageItems.module.css";
import { fetchData } from "../helpers/common";

const CartPageItems = (props) => {
  const userCtx = useContext(UserContext);
  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }

  const delItemFromCart = async () => {
    // update cart with item in database
    const body = {
      itemID: props.itemID,
    };
    const { ok, data } = await fetchData(
      `/project/items/${userCtx.cartID}`,
      undefined,
      "PATCH",
      body
    );

    if (ok) {
      alert("Item removed from cart");
      props.onDelete();
      console.log(ok);
    } else {
      console.log(data);
    }
  };
  return (
    <>
      <div className={styles.ItemDisplay}>
        <img src={props.item.imgUrl} style={{ width: 250, height: 250 }} />

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
          <button className="col-sm-1" onClick={() => delItemFromCart()}>
            Delete from cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPageItems;
