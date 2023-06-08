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

  const confirmBuyItemFromCart = async () => {
    // update cart with item in database
    const body = {
      cartID: userCtx.cartID,
      buyerID: userCtx.userID,
    };
    const { ok, data } = await fetchData(
      "/project/items",
      undefined,
      "PATCH",
      body
    );

    if (ok) {
      alert("Item sold");
      getItemsFromCart();
      console.log(ok);
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
        return (
          <CartPageItems
            key={item.itemID}
            item={item}
            itemID={item.itemID}
            onDelete={getItemsFromCart}
          />
        );
      })}
      <button className="col-sm-1" onClick={() => confirmBuyItemFromCart()}>
        Confirm
      </button>
    </div>
  );
};

export default CartPage;
