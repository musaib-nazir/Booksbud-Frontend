import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {


const navigate = useNavigate()





  return (
    <div className="admin-side">
      <div className="adminprofile">
        <span>
          <FaUserCircle
            style={{
              fontSize: "20px",
              height: "30px",
              width: "30px",
              marginBottom: "7px",
            }}
          />{" "}
          <p>
            {" "}
            <b>Hello,Admin</b>{" "}
          </p>
        </span>
      </div>

      <ul>
        <li>
          {" "}
          <button onClick={()=>{navigate("/admin/dashboard")}}>
            {" "}
            <BsGraphUpArrow /> Dashboard{" "}
          </button>{" "}
        </li>
        <li>
          {" "}
          <button onClick={()=>{ navigate("/admin/users")}}>
            {" "}
            <PiUsersThree /> Users
          </button>{" "}
        </li>{" "}
        <li>
          {" "}
          <button onClick={()=>{ navigate("/admin/products")}}>
            <LuShoppingCart /> Products{" "}
          </button>
        </li>
        <li>
          {" "}
          <button>
            {" "}
            <FaClipboardList /> Orders{" "}
          </button>{" "}
        </li>
        <li>
          <button>
            {" "}
            <AiOutlineLogout /> Log Out{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
