import React, { useState, useEffect } from "react";
import emailIcon from "../img/email.svg";
import passwordIcon from "../img/password.svg";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import UserTable from "./UserTable";
import axios from '../services/axios'; 

const UserList = () => {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const api = axios
      .get("/users")
      .then((response) => response.data)
      .then((data) => {
          console.log(data, "ssss")
          setUsers(data.data);
      });

      toast.promise(api, {
        pending: "Loading your data...",
        success: false,
        error: "Something went wrong!",
      });
  }, []);

  return (
    <div>
        <UserTable users={users}/>
    </div>
  );
};

export default UserList;
