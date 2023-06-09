import React, { useContext } from "react";
import styles from "./HomePageItems.module.css";
import UserContext from "../context/user";

import { Link } from "react-router-dom";

const UsersPageUsers = (props) => {
  const userCtx = useContext(UserContext);
  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`row ${styles.item}`}>
      <div className="col-sm-2">{props.userID}</div>
      <div className="col-sm-2">{props.firstName}</div>
      <div className="col-sm-2">{props.lastName}</div>
      <div className="col-sm-2">{props.address}</div>
      <div className="col-sm-2">{props.email}</div>
      <div className="col-sm-2">{props.contactNo}</div>

      <img className={styles.photo} src={props.imgUrl} />
      {/* <Link to={`/home/${props.itemID}`} className="col-sm-1">
        <button className="col-sm-12">view</button>
      </Link>
      <button className="col-sm-1" onClick={() => addItemToCart()}>
        add to cart
      </button> */}
    </div>
  );
};

export default UsersPageUsers;
