import React, { useState } from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import img1 from "../assets/welcome page.png";

import img2 from "../assets/bsell.png";
import img3 from "../assets/explore 2.png";
import "./styles/home.scss";
import DealCard from "./deal-card/Deal";
import "../maincomponent/deal-card/dealcard.scss";

const booksData = [
  {
    title: "Treasure Island",

    Author: "Robert Louis Stevenson",
    originalPrice: 2099,

    coverImage:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_AqOfDPs9ufnpFhFmLzdHs-vGLnKta9W_L28oV-g0epU0MkYI",
  },

  {
    title: "three musketeers",

    Author: "defaulty",
    originalPrice: 2099,

    coverImage:
      "https://m.media-amazon.com/images/I/71UZgL51J2L._SL1200_.jpg",
  },

  {
    title: "Life of pie",

    Author: "defaulty",
    originalPrice: 1000,

    coverImage: "https://images-cdn.reedsy.com/discovery/image/472/image/medium_df628fe8978f3a42cc4c12633d2e4b86fdf2638a.jpg",
  },

  {
    title: "The Hobbit",

    Author: "defaulty",
    originalPrice: 1500,

    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8Nb2Lto9gmmAZldToTiTpoArgtUODX-o1t4O5kvOFg&s",
  },
];

const Home = () => {
  const [slide, setslide] = useState(0);

  const nextslide = () => {
    setslide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const previouslide = () => {
    setslide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div className="Home">
      <div className="carousel">
        <div className="button1">
          {" "}
          <button onClick={previouslide}>
            {" "}
            <HiArrowSmLeft />
          </button>{" "}
        </div>

        <div className="slide1">
          {slide === 0 && <img src={img1} alt="  image1" />}
          {slide === 1 && <img src={img2} alt="image2" />}

          {slide === 2 && <img src={img3} alt="image 3" />}
        </div>

        <div className="button2">
          {" "}
          <button onClick={nextslide}>
            {" "}
            <HiArrowSmRight />
          </button>{" "}
        </div>
        <div className={slide === 2 ? "exp-button" : "display-none"}>
          <a  href="/buy/books ">Explore</a>
        </div>
      </div>

      <div className="Deals">
        {" "}
        <h1>Today's deal</h1>
        <div className="deal-Cards">
          <p>GET 20% OFF ON BOOKS FROM ADVENTURE GENRE </p>
          <div className="Cards">
            {booksData.map((book) => (
              <DealCard book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
