import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./CarouselCenter.css"

export default class CenterMode extends Component {
  
  render() {

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

          {items.map(
            (item) => 
          
          <Link to="/product/id">
          <div className="new">
          <img src="https://s.yimg.com/uu/api/res/1.2/XFrQiAN9AnMM6VrG0empkQ--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-06/ed27dac0-ac98-11ea-bfff-f40bb81f4fdb.cf.jpg" alt=""
          // className="imgcenter1"
     
          />
        </div>
        </Link>
          )}
   
        </Slider>
      </div>
    );
  }
}