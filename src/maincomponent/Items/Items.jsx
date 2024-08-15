import   React from "react";

import './Items.scss'



const data = [
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "abc",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
  {
    name: "harry potter",
    author: "harry bhai",
    price: 300,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
  },
];

const Items = () => {
  return (
    <>
      <div className="main-items">
        <div className="items">
          <div className="item-cards">
            {data.map((item) => (
              <div className="card">
                  <img src={item.imageUrl} alt="image" />
                <h1> {item.name}</h1>
              
             
                <strong style={{color:"green" ,fontSize:"20px"}}> ₹{item.price}</strong>


                <button>Buy now</button>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
