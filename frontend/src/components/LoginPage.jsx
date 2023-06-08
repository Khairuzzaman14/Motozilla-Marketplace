import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import jwt_decode from "jwt-decode";
import UserContext from "../context/user";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const userCtx = useContext(UserContext);
  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("kzamanwar@gmail.com");
  const [password, setPassword] = useState("password");
  let navigate = useNavigate();

  const handleLogin = async () => {
    const { ok, data } = await fetchData("/auth/login", undefined, "POST", {
      email,
      password,
    });

    if (ok) {
      userCtx.setAccessToken(data.access);
      const decoded = jwt_decode(data.access);
      console.log("decoded data", decoded);
      userCtx.setUserID(decoded.userID);
      userCtx.setCartID(decoded.cartID);
      userCtx.setFirstName(decoded.firstName);
      userCtx.setLastName(decoded.lastName);
      userCtx.setEmail(decoded.email);
      navigate("/home");
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <br />
      <div className="row">
        <div className="col-md-4"></div>
        <input
          type="text"
          className="col-md-4"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          type="password"
          className="col-md-4"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>

        <button className="col-md-4" type="submit" onClick={handleLogin}>
          login
        </button>

        <div className="col-md-4"></div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4"></div>
        <Link to="/registration" className="col-md-4">
          Register
        </Link>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default LoginPage;
