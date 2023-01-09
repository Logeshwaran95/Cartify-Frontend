import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductScreen.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="pscreen">
        <Slider {...settings}>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>    
          </div>
          <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>    
          </div>  <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>    
          </div>  <div>
            <ProductCard/>
          </div>
          <div>
            <ProductCard/>    
          </div>
          
        </Slider>
      </div>
    );
  }
}