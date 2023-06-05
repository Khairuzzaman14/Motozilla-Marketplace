import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/common";

const Registration = (props) => {
  const [roles, setRoles] = useState([]);
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

  // const getRoles = async () => {
  //   const { ok, data } = await fetchData("/roles");

  //   if (ok) {
  //     setRoles(data);
  //   } else {
  //     console.log(data);
  //   }
  // };

  // useEffect(() => {
  //   getRoles();
  // }, []);

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
        {/* <select
          name="roles"
          id="roles"
          className="col-md-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="none">please select</option>
          {roles.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select> */}
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
        <button
          className="col-md-4"
          type="submit"
          onClick={() => props.setShowLogin(true)}
        >
          go to login screen
        </button>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Registration;
