import React, { useContext, useState, useEffect } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import CartPageItems from "./CartPageItems";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const userCtx = useContext(UserContext);
  const [cart, setCart] = useState([]);

  if (userCtx.accessToken.length == 0) {
    return <Navigate to="/" replace />;
  }
  //   const addingItemToCart = async () => {
  //     const { ok, data } = await fetchData("/project/carts", undefined, "PATCH", {
  //       userID: userCtx.userID,
  //       //   itemID:
  //     });

  //     if (ok) {
  //       SetCart(data);
  //     } else {
  //       console.log(data);
  //     }
  //   };

  //   useEffect(() => {
  //     addingItemToCart();
  //   }, []);
  const getItemsFromCart = async () => {
    const { ok, data } = await fetchData(
      `/project/items/${userCtx.cartID}`,
      undefined,
      "POST"
    );

    if (ok) {
      setCart(data);
    } else {
      console.log(data);
    }
  };
  useEffect(() => {
    getItemsFromCart();
  }, []);
  return (
    <div>
      <div>My Cart</div>
      {cart.map((item) => {
        return <CartPageItems key={item.itemID} item={item} />;
      })}
      <button className="col-sm-1">Confirm</button>
    </div>
  );
};

export default CartPage;
