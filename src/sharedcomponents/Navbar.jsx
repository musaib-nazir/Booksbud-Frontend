import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import "../sharedcomponents/navbar.scss";
import { HiViewList } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Register from "../Usercomponents/Register";
import { BsInputCursor } from "react-icons/bs";
import Form from "../maincomponent/loginForm/Form";
const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const [search, setSearch] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()

  const user = [
    {
      username: "Musaib",
      email: "musi7780@gmail.com",
      password: "12345",
    },
  ];
  return (
    <div className="navbar">
      <div className="option">
        {console.log(user)}
        <button
          onClick={() => {
            setsidebar(!sidebar);
          }}
        >
          <HiViewList />
        </button>

        <div
          className={
            sidebar
              ? "sidebar  animate__animated animate__fadeInDown "
              : "display-none"
          }
        >
          <div className="profile">
            <span>
              {" "}
              <FaUserCircle />{" "}
            </span>{" "}
            <a
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Sign-up/Sign-in
            </a>
          </div>

          <div className="menu">
            <a>Categories</a>
            <a>Sell</a>
            <a>Orders</a>
            <a>Settings</a>
            <a>Blogs</a>
          </div>
        </div>

        <h1>
          {" "}
          <a href="/"> BooksBud</a>{" "}
        </h1>

        {/* <div className="btns">
          <button
            onClick={() => {
              setLoginform(!loginform);
            }}
          >
            Login
          </button>

          <a href="/register">Register</a>
        </div> */}

        <div className="profile-icon">


<button style={{fontSize:"20px"}} onClick={()=>{navigate("/admin/dashboard ")}}> admin-login</button>





          <button>
            <FaShoppingCart />
          </button>
          <button
            onClick={() => {
              setSearch(!search);
            }}
          >
            {" "}
            <FaSearch />{" "}
          </button>

          <div className="Search">
            {search ? (
              <input
                type="text"
                placeholder="search your favourite book here"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

    {showForm && <Form  showForm ={showForm} setShowForm={setShowForm}/>}
    </div>
  );
};

export default Navbar;
