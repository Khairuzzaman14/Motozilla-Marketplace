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
import UsersPage from "./components/UsersPage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState("");
  const [cartID, setCartID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        userID,
        setUserID,
        accessToken,
        setAccessToken,
        isAdmin,
        setIsAdmin,
        cartID,
        setCartID,
        email,
        setEmail,
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
          <Route path="users" element={<UsersPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
