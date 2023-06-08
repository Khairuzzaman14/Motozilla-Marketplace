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
      price: Number(priceRef.current.value),
      sellerID: userCtx.userID,
    });
    alert("Item created");
  };

  return (
    <>
      <div className={styles.ItemDisplay}>
        <div className={styles.ItemDetails}>
          <div className={styles.ItemBox}>
            <div className={styles.ItemName}>Item Name:</div>
            <Input inputRef={nameRef}></Input>
            <div className={styles.Price}>Price:</div>
            <Input inputRef={priceRef}></Input>
            <div className={styles.Type}>Type:</div>
            <Input inputRef={typeRef}></Input>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.DescriptionBox}>
          <div className={styles.Description}>Description:</div>

          <Input multiline inputRef={descriptionRef}></Input>
          <br />
          <br />
          <div className={styles.ItemName}>Image Url:</div>
          <Input inputRef={imgUrlRef}></Input>
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
