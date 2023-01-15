import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./CarouselCenter.css"

const CenterMode = (props) => {

  const product = props.data;
  

    const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1296,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 942,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="centercontainer">

        <Slider {...settings}>

          {product.map(
            (item) => 

            <Link to="/home/product/" 
            state={{product: item}}
            >
                       <div className="new">
          <img src={
            item.image
          } alt=""
          // className="imgcenter1"
     
          />
        </div>
            </Link>
 
          )}
   
        </Slider>
 
      </div>
    );
  }

export default CenterMode;
