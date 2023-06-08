import React, { useContext } from "react";
import styles from "./HomePageItems.module.css";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import { Link } from "react-router-dom";

const HomePageItems = (props) => {
  const userCtx = useContext(UserContext);

  const addItemToCart = async () => {
    // update cart with item in database
    const body = {
      cartID: userCtx.cartID,
      itemID: props.itemID,
    };
    const { ok, data } = await fetchData(
      "/project/carts",
      undefined,
      "PATCH",
      body
    );

    if (ok) {
      alert("Item added to cart");

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
      <Link to={`/home/${props.itemID}`}>
        <button className="col-sm-1">view</button>
      </Link>
      <button className="col-sm-1" onClick={() => addItemToCart()}>
        add to cart
      </button>
    </div>
  );
};

export default HomePageItems;
