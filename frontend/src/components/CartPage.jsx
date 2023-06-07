import React, { useContext, useState, useEffect } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const CartPage = () => {
  //   const userCtx = useContext(UserContext);
  //   const [cart, SetCart] = useState({});
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

  return (
    <div>
      <div>My Cart</div>
      <div>
        Items:
        {/* {item.name} */}
        <button>Delete</button>
      </div>
      <div>Total:</div>
    </div>
  );
};

export default CartPage;
