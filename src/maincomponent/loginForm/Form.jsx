import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./form.css";
const Form = (props) => {
  return (
    <div
      className={
        props.showForm
          ? "login-form animate__animated  animate__bounceIn "
          : "display-none"
      }
    >
      <h1>Login</h1>

      <button 
        onClick={() => {
          props.setShowForm(!props.showForm);
        }}
      >
        {" "}
        <RxCross2 />{" "}
      </button>
      <form>
        <label>
          E-mail :
          <input
            type="email"
            name="Email"
            placeholder="Enter your username here"
          />
        </label>

        <label>
          Password :
          <input
            type="password"
            name="Password"
            placeholder="Enter your password here"
          />
        </label>

        <div className="bottun">
          {" "}
          <button >Login</button>
        </div>
      </form>
      <div className="nav">
        <p>
          New here on BooksBud? <a href="/register">Sign-up here</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Form;
