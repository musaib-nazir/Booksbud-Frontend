import   React from "react";

import './Items.scss'



const data = [
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
    imageUrl: "abc",
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
    imageUrl: "abc",
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
    imageUrl: "abc",
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
    imageUrl: "abc",
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
                <span> {item.name}</span>
                <img src={item.imageUrl} alt="" />
                <span> {item.author}</span>
                <span> {item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
