import React from "react";
import "./styles/adminusers.scss";

const data =[
  {
    bookId: 1,
    BookName: "The Great Gatsby",
    Price: 1099,
    Quantity: 20,
    Status: "Available",
    Action: "Edit/Delete",
  },
  {
    bookId: 2,
    BookName: "To Kill a Mockingbird",
    Price: 799,
    Quantity: 15,
    Status: "Available",
    Action: "Edit/Delete",
  },
  {
    bookId: 3,
    BookName: "1984",
    Price: 899,
    Quantity: 30,
    Status: "Out of Stock",
    Action: "Edit/Delete",
  },
  {
    bookId: 4,
    BookName: "Pride and Prejudice",
    Price: 699,
    Quantity: 25,
    Status: "Available",
    Action: "Edit/Delete",
  },
  {
    bookId: 5,
    BookName: "The Catcher in the Rye",
    Price: 1299,
    Quantity: 10,
    Status: "Low Stock",
    Action: "Edit/Delete",
  },
  {
    bookId: 6,
    BookName: "The Hobbit",
    Price: 1499,
    Quantity: 5,
    Status: "Out of Stock",
    Action: "Edit/Delete",
  },
  {
    bookId: 7,
    BookName: "Fahrenheit 451",
    Price: 999,
    Quantity: 8,
    Status: "Low Stock",
    Action: "Edit/Delete",
  },
  {
    bookId: 8,
    BookName: "Moby Dick",
    Price: 1199,
    Quantity: 12,
    Status: "Available",
    Action: "Edit/Delete",
  },
];;

const Adminproducts = () => {
  return (
    <div className="adminusers">
      <div className="table-container">

        <h1>Books list:</h1>
<button style={{marginLeft:"1335px",width:"150px",height:"50px",backgroundColor:"blue" ,color:"white",marginBottom:"10px"}}>+Add Book</button>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th>bookId</th>
                <th>BookName</th>
                <th>Price</th>
                <th>Quantity</th>
                

                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((book) => (
                <tr>
                  <td>{book.bookId}</td>
                <td>{book.BookName}</td>
                <td>₹{book.Price.toFixed(2)}</td>
                <td>{book.Quantity}</td>
                <td>{book.Status}</td>
               
                  <td>
                    {" "}
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "1px solid red",
                        borderRadius: "7px",
                        height: "45px",

                        width: "85px",
                        fontSize: "15px",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Delete
                    </button>{" "}
                    <button
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "1px solid blue",
                        borderRadius: "7px",
                        height: "45px",

                        width: "85px",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Adminproducts;
