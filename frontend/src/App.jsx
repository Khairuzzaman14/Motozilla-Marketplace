import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import UserContext from "./context/user";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import NavBar from "./components/NavBar";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [userID, setUserID] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{
          userID,
          setUserID,
          accessToken,
          setAccessToken,
          isAdmin,
          setIsAdmin,
        }}
      >
        {accessToken.length > 0 && (
          <>
            <NavBar />
            <HomePage />
            {/* <ItemPage />
            <CartPage /> */}
          </>
        )}
        {accessToken.length === 0 && showLogin && (
          <LoginPage setShowLogin={setShowLogin} />
        )}
        {accessToken.length === 0 && !showLogin && (
          <RegistrationPage setShowLogin={setShowLogin} />
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
