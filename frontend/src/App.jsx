import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import UserContext from "./context/user";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import NavBar from "./components/NavBar";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import ListItemPage from "./components/ListItemPage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [userID, setUserID] = useState("");
  const [cartID, setCartID] = useState("");

  return (
    <UserContext.Provider
      value={{
        userID,
        setUserID,
        accessToken,
        setAccessToken,
        isAdmin,
        setIsAdmin,
        cartID,
        setCartID,
      }}
    >
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:itemID" element={<ItemPage />} />
          <Route path="/cart/:cartID" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/listItem" element={<ListItemPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
