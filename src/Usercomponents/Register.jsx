import React, { useState } from "react";
import "./register.scss";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineCamera } from "react-icons/hi";
import Form from "../maincomponent/loginForm/Form";
import { FaDiceThree } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import axios from "axios";


const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
const [image ,setImage] = useState(null);
const handleImage = async(e)=>{

const file = e.target.files[0]
const reader = new FileReader(



)
reader.readAsDataURL(file)
reader.onload= ()=>{

if(reader.readyState === 2){


  setImage(reader.result)
}

}


}

  const registerhandler = async (e) => {
    e.preventDefault();
    try {
      const formdataarr = new FormData();



formdataarr.append("firstname",firstname)
formdataarr.append("lastname",lastname)
formdataarr.append("email",email)
formdataarr.append("phone",phone)
formdataarr.append("password",password)
formdataarr.append("birthday",birthday)

const res = await axios.post("http://localhost:6000/register",formdataarr)
console.log(res)



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
                    <HiOutlineCamera />
                  </div>
                </div>
                <input type="file" accept="image/*" 
                
                onChange={handleImage}
                
                />
              </label>
            </div>

            <div className="restform">
              <div className="username">
                <label>
                  First Name:
                  <input
                    type=" text"
                    placeholder="Enter Your First Name Here"
                    value
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type=" text"
                    placeholder="Enter Your Last  Name Here"
                  />
                </label>
              </div>
              <label>
                E-mail:
                <input
                  type="email"
                  placeholder="
Enter Your Email here"
                />
              </label>
              <label>
                Phone:
                <input
                  type="number"
                  placeholder="
Enter Your Phone number here"
                />
              </label>

              <div className="password">
                <label>
                  {" "}
                  Password:
                  <input
                    type="Password"
                    placeholder="Enter your password here"
                  />
                </label>
                <label>
                  {" "}
                  Birth-Date:
                  <input type="date" />
                </label>
              </div>
            </div>

            <button>Register</button>

            {/* 
<p>ALready a member? <a onClick={()=>{setShowForm(!showForm)}}> Login </a></p> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
