import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const cardData = [
    { title: "Card 1", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." },
    { title: "Card 2", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." },
    // ... Repeat the above line to add more card data
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} infinite={true}>
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-body">{card.body}</p>
            <a href="#" className="button">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
