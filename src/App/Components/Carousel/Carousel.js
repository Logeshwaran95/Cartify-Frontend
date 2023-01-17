import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

export default function CorouselComponent() {

  const images = ["./c1.png","./c2.png","./c9.png","./c3.png","./c4.png","./c8.png","./c7.png","./c5.png","./c6.png","./c10.png"];

  
  return (
    <div
    style={{
      marginTop: "-12px",
    }}
    >
          <Carousel 
          interval={3000}
          fluid
          >

      {images.map((image) => 

<Carousel.Item>
{/* <Link to="/home/product/id"> */}

<img
  className="d-block w-100 carousel-image"
  src={image}
  alt="First slide"

/>
{/* </Link> */}
{/* <Carousel.Caption>
  <h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption> */}
</Carousel.Item>
      
      )}
    

    </Carousel>
    </div>
  )
}
