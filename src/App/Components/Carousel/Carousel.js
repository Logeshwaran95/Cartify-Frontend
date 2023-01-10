import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

export default function CorouselComponent() {

  const images = ["https://image.api.playstation.com/vulcan/img/rnd/202111/0822/syCdM5vjxZqsHgHDdT3XZUcF.jpg",
  "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/01/Screenshot_2023-01-05-12-29-59-937_com.google.android.youtube.jpg?fit=1920%2C1080&ssl=1",
  "https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/09/new-skullcandy-gaming-headsets.jpg?w=640"
]
  
  return (
    <div>
          <Carousel 
          interval={5000}
          >

      {images.map((image) => 

<Carousel.Item>
<Link to="product/id">
<img
  className="d-block w-100 carousel-image"
  src={image}
  alt="First slide"

/>
</Link>
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
