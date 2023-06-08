import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/common";
import { Link } from "react-router-dom";

const Registration = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const inputRef = React.useRef();
  const handleContactNoChange = () => {
    setContactNo(parseInt(inputRef.current.value));
  };

  const registerUser = async () => {
    const { ok, data } = await fetchData("/auth/register", undefined, "PUT", {
      firstName,
      lastName,
      address,
      contactNo,
      email,
      password,
      isAdmin,
    });

    if (ok) {
      setFirstName("");
      setLastName("");
      setAddress("");
      setContactNo("");
      setEmail("");
      setPassword("");
      setIsAdmin(false);
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
          className="col-md-4"
          placeholder="first name"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="last name"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="address"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="contact no"
          type="number"
          value={contactNo}
          ref={inputRef}
          onChange={handleContactNoChange}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <button className="col-md-4" type="submit" onClick={registerUser}>
          register
        </button>
        <div className="col-md-4"></div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4"></div>
        <Link to="/" className="col-md-4">
          Login
        </Link>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Registration;
