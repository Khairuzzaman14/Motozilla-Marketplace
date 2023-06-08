import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchData } from "../helpers/common";
import HomePageItems from "./HomePageItems";
import { Navigate } from "react-router-dom";
import UserContext from "../context/user";

const HomePage = (props) => {
  const userCtx = useContext(UserContext);
  const [items, setItems] = useState([]);

  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }

  const getItems = async () => {
    const { ok, data } = await fetchData(
      `/project/items/${userCtx.userID}`,
      undefined,
      "GET"
    );

    if (ok) {
      setItems(data);
    } else {
      console.log("get items", data);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
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
    </>
  );
};

export default HomePage;
