import React from "react";
import "./styles/adminusers.scss";

const data = [
  {
    UserId: 23546,
    Username: "Musaib",
    Email: "musi@123gmail.com",
    status:"active",
  },
  {
    UserId: 23546,
    Username: "Musaib",
    Email: "musi@123gmail.com",
    status: "active",
  },
  {
    UserId: 23546,
    Username: "Musaib",
    Email: "musi@123gmail.com",
    status: "inactive",
  },
  {
    UserId: 23546,
    Username: "Musaib",
    Email: "musi@123gmail.com",
    status: "active",
  },
  {
    UserId: 23546,
    Username: "Musaib",
    Email: "musi@123gmail.com",
    status: "inactive",
  },
  {
    UserId: 23546,
    Username: "Musaib",
    Email: "musi@123gmail.com",
    status: "active",
  },
];

const Adminusers = () => {
  return (
    <div className="adminusers">
      <div className="table-container">


<h1>User Details:</h1>


      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>

<th>Action</th>



            </tr>
          </thead>

          <tbody>
            {data.map((data) => (
              <tr>
                <td> {data.UserId}</td>
                <td>{data.Username}</td>
                <td>{data.Email}</td>
                <td>{data.status}</td>
                <td> <button style={{backgroundColor:"red",
color:"white",
                                       border:"1px solid red",borderRadius:"7px",
                                      height:"45px",

                                      width:"85px",
                                      fontSize:"15px",
                                      fontWeight:"600",
                                      marginRight:"20px"
                                    

                }}>Delete</button     > <button  style={{backgroundColor:"blue",
                color:"white",
                                                       border:"1px solid blue",borderRadius:"7px",
                                                      height:"45px",
                
                                                      width:"85px",
                                                      fontSize:"15px",
                                                      fontWeight:"600"
                
                                }}> Edit
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>





      </div>

    
    </div>
  );
};

export default Adminusers;
