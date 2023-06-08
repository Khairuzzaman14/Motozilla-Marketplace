import React, { useContext, useRef } from "react";
import styles from "./ListItemPage.module.css";
import { Input } from "@mui/material";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";

const ListItemPage = (props) => {
  const userCtx = useContext(UserContext);
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const imgUrlRef = useRef();
  const priceRef = useRef();
  const addItems = async () => {
    const { ok, data } = await fetchData("/project/items", undefined, "PUT", {
      name: nameRef.current.value,
      type: typeRef.current.value,
      description: descriptionRef.current.value,
      imgUrl: imgUrlRef.current.value,
      isSold: false,
      price: priceRef.current.value,
      sellerID: userCtx.sellerID,
    });
  };

  return (
    <>
      <div className={styles.ItemDisplay}>
        {/* <div className={styles.img}> */}
        {/* <img src={item.imgUrl} style={{ width: 250, height: 250 }} /> */}
        {/* </div> */}

        <div className={styles.ItemDetails}>
          <div className={styles.ItemBox}>
            <div className={styles.ItemName}>Item Name:</div>
            <Input ref={nameRef}></Input>
            {/* <div className={styles.ItemName2}>{item.name}</div> */}
            <div className={styles.Price}>Price:</div>
            <Input ref={priceRef}></Input>
            {/* <div className={styles.Price2}>${item.price}</div> */}
            <div className={styles.Type}>Type:</div>
            <Input ref={typeRef}></Input>
            {/* <div className={styles.Type2}>{item.type}</div> */}
            <div className={styles.Seller}>Seller:</div>
            <Input multiline placeholder={userCtx.firstName}>
              {userCtx.firstName}
              {userCtx.lastName}
            </Input>
            {/* <div className={styles.Seller2}>{item.sellerID}</div> */}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.DescriptionBox}>
          <div className={styles.Description}>Description:</div>
          {/* <div className={styles.Description2}>{item.description}</div> */}
          <Input multiline ref={descriptionRef}></Input>
          <br />
          <br />
          <div className={styles.ItemName}>Image Url:</div>
          <Input ref={imgUrlRef}></Input>
          <br />
          <br />
          <button className="col-sm-1" onClick={addItems}>
            Create Item
          </button>
        </div>
      </div>
    </>
  );
};

export default ListItemPage;
