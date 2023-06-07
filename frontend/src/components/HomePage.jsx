import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchData } from "../helpers/common";
import HomePageItems from "./HomePageItems";

const HomePage = (props) => {
  // const userCtx = useContext(UserContext);
  const [items, setItems] = useState([]);
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const imgUrlRef = useRef();
  const priceRef = useRef();
  // const sellerID = useRef();

  const getItems = async () => {
    const { ok, data } = await fetchData("/project/items", undefined, "GET");

    if (ok) {
      setItems(data);
    } else {
      console.log(data);
    }
  };

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

  const deleteItem = async () => {
    const { ok, data } = await fetchData("project/items", undefined, "DELETE");
    if (ok) {
      getItems();
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div> HomePage</div>

      <div className="row">
        <div className="col-md-2">Name</div>
        <div className="col-md-2">Type</div>
        <div className="col-md-5">Description</div>
        <div className="col-md-2">Price($)</div>
        <div className="col-md-2"></div>
      </div>
      {items.map((item) => {
        return (
          <HomePageItems
            key={item.itemID}
            itemID={item.itemID}
            name={item.name}
            type={item.type}
            description={item.description}
            sellerID={item.sellerID}
            price={item.price}
            imgUrl={item.imgUrl}
            getItems={getItems}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
