import React from "react";
import styles from "./HomePageItems.module.css";

const HomePageItems = (props) => {
  return (
    <div className={`row ${styles.item}`}>
      <div className="col-sm-2">{props.name}</div>
      <div className="col-sm-2">{props.type}</div>
      <div className="col-sm-5">{props.description}</div>
      <div className="col-sm-2">{props.price}</div>
      <img className={styles.photo} src={props.imgUrl} />
      <button className="col-sm-1">view</button>
      <button className="col-sm-1">add to cart</button>
    </div>
  );
};

export default HomePageItems;
