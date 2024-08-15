import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Form = (props) => {




  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      const res = await axios.post(`http://localhost:5000/user/login`, formData);
      console.log(res.data)

      if (res.data.message === "Logged In") {
        const { token } = res.data;
        await localStorage.setItem("token", token);
    


      
        setFormData({
          email: "",
          password: "",
        });

      navigate("/buy/books")
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setLoading(false);
      setMessage("Network Error ");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };















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
          
          <input
            type="email"
            name="email"
            placeholder="Enter your username here"
            onChange={handleChange}
          />
        </label>

        <label>
       
          <input
            type="password"
            name="password"
            placeholder="Enter your password here"
            onChange={handleChange}
          />
        </label>
<p>{message}</p>
        <div className="bottun">
          {" "}
          <button onClick={handleLogin} >Login</button>
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
