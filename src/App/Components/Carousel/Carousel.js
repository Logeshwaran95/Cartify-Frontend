import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

export default function CorouselComponent() {
  return (
    <div>
          <Carousel 
          interval={5000}
          >
      <Carousel.Item>
        <Link to="product/id">
        <img
          className="d-block w-100 carousel-image"
          src="https://www.volusion.com/blog/content/images/2021/09/Product-Photography.jpeg"
          alt="First slide"
        
        />
        </Link>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://www.oberlo.com/media/1603969900-productphotog-2.jpg?w=1824&fit=max"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-NUl6x9s-kJYDskfHePF3SremgAWGSQZ7isesUL6iLmey4k6Hdw6w0ZohG57oWrjLvk&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
