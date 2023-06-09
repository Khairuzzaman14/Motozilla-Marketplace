import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchData } from "../helpers/common";
import UsersPageUsers from "./UsersPageUsers";
import { Navigate } from "react-router-dom";
import UserContext from "../context/user";

const UsersPage = (props) => {
  const userCtx = useContext(UserContext);
  const [users, setUsers] = useState([]);

  if (userCtx.accessToken.length === 0 && userCtx.isAdmin === false) {
    return <Navigate to="/" replace />;
  }
  console.log(userCtx);
  const getUsers = async () => {
    const { ok, data } = await fetchData(
      "/project/users",
      userCtx.accessToken,
      "GET"
    );

    if (ok) {
      setUsers(data);
    } else {
      console.log("get users", data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        <div> HomePage</div>

        <div className="row">
          <div className="col-md-2">User ID</div>
          <div className="col-md-2">First Name</div>
          <div className="col-md-2">Last Name</div>
          <div className="col-md-2">Address</div>
          <div className="col-md-2">Email</div>
          <div className="col-md-2">Contact No</div>
        </div>
        {users.map((item) => {
          return (
            <UsersPageUsers
              key={item.userID}
              userID={item.userID}
              firstName={item.firstName}
              lastName={item.lastName}
              address={item.address}
              email={item.email}
              contactNo={item.contactNo}
            />
          );
        })}
      </div>
    </>
  );
};

export default UsersPage;
