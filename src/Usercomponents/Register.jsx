import React, { useState } from "react";
import "./register.scss";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineCamera } from "react-icons/hi";
import Form from "../maincomponent/loginForm/Form";
import { FaDiceThree } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [Message,setMessage] = useState("")
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState(null);



  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
  };
  const Navigate=useNavigate()

  const registerhandler = async (e) => {
    e.preventDefault();
    try {
    
      const formdataarr = new FormData();

      formdataarr.append("firstname", firstname);
      formdataarr.append("lastname", lastname);
      formdataarr.append("email", email);
      formdataarr.append("phone", phone);
      formdataarr.append("password", password);
      formdataarr.append("birthday", birthday);
      formdataarr.append("image", image);
      const res = await axios.post(
        "http://localhost:5000/user/register",
        formdataarr
      );
      console.log(res);
      if (res.data.message == "registration successful") {
    setMessage(res.data.message)
        // Form Sanitization
        setFirstname("");
        setLastname("");
        setEmail("");
        setBirthday("");
        setPassword("");
        setPhone('')
        setImage("")

Navigate("/buy/books")

      } else {
       setMessage(res.data.message)
      }
    } catch (error) {}
  };

  return (
    <>
   
     
      <div className="Register">
  
        <div className="formcontainer">

          <form>
            <div className="profileform">
              <label>
                <div className="profile-pic">
                  <div className="plus">
                    {image ? (
                      <img src={image} alt="Profile" className="profile-img" />
                    ) : (
                      <div className="plus">
                        <HiOutlineCamera  style={{marginTop:"30px"}} />
                      </div>
                    )}
                  </div>
                </div>
                <input type="file" accept="image/*" onChange={handleImage} />
              </label>
            </div>

            <div className="restform">
              <div className="username">
                <label>
                  First Name:
                  <input
                    type=" text"
                    placeholder="Enter Your First Name Here"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type=" text"
                    placeholder="Enter Your Last  Name Here"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </label>
              </div>
              <label>
                E-mail:
                <input
                  type="email"
                  placeholder="
Enter Your Email here"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label>
                Phone:
                <input
                  type="number"
                  placeholder="
Enter Your Phone number here"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </label>

              <div className="password">
                <label>
                  {" "}
                  Password:
                  <input
                    type="Password"
                    placeholder="Enter your password here"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </label>
                <label>
                  {" "}
                  Birth-Date:
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => {
                      setBirthday(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
<p   style={{color:"red",marginLeft:"30px"}}>{Message}</p>
            <button onClick={registerhandler}>Register</button>

          

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
