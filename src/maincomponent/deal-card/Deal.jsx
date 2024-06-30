import React from 'react';

const calculateDiscountPrice = (originalPrice) => {
  return (originalPrice * 0.2)
};

const DealCard = ({ book }) => {
  const { title, author, originalPrice, coverImage } = book;
  const salePrice = calculateDiscountPrice(originalPrice);
return (
    
    <div className="deal-card">

      
      <img src={coverImage} alt={`${title} cover`} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p className="original-price">₹{originalPrice}</p>
      <p className="sale-price">₹{salePrice}</p>
      <div className="discount-tag">20% OFF</div>

<button>Buy now</button>

    </div>
  );
};

export default DealCard;
