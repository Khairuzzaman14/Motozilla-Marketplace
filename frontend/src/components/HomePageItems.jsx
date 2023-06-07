import React, { useContext } from "react";
import styles from "./HomePageItems.module.css";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";

const HomePageItems = (props) => {
  const userCtx = useContext(UserContext);

  const addingItemToCart = async (userID, itemID) => {
    // update cart with item in database
    const body = {
      userID: userID,
      itemID: itemID,
    };
    const { ok, data } = await fetchData(
      "/project/carts",
      undefined,
      "PATCH",
      body
    );

    if (ok) {
      //   SetCart(data);
      console.log(ok);
    } else {
      console.log(data);
    }
  };

  return (
    <div className={`row ${styles.item}`}>
      <div className="col-sm-2">{props.name}</div>
      <div className="col-sm-2">{props.type}</div>
      <div className="col-sm-5">{props.description}</div>
      <div className="col-sm-2">{props.price}</div>
      <img className={styles.photo} src={props.imgUrl} />
      <button className="col-sm-1" to="/itemid">
        view
      </button>
      {/* link react router */}
      <button
        className="col-sm-1"
        // onClick={addingItemToCart(userCtx.userID, props.itemID)}
      >
        add to cart
      </button>
    </div>
  );
};

export default HomePageItems;
