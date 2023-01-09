import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './ProductDetailsScreen.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];



export default function ProductDetailsScreen() {

  const [currImage, setCurrImage] = React.useState(images[0].original);
  const [quantity, setQuantity] = React.useState(1);

  return (

    <div>

        <Container className="container">
      <Row>
        <Col lg>
        <div className='left1'>
          <h2>Nike Air Max</h2>
          <p>
          Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.
          </p>
          <div className='imgchoicegrp'>
            {images.map((image, index) => (
                   <img src={image.original} className='imgchoice'
                   onClick={() => setCurrImage(image.original)}
                   />
            ))}
        
          </div>
       </div>
        </Col>
        <Col lg>
        <div className='center'>

<div className='centerImg'>
    <img
    src={currImage} />
    <h3 
    style={{
        textAlign: 'center',
        color: 'white',
        marginTop: '10px',
    }}
    >${quantity*100}</h3>

    <div className="quantity">
    <button className="minus-btn" type="button" name="button"
    onClick={ () => {
      if(quantity > 1) {
        setQuantity(quantity - 1);
      }
      else{
        setQuantity(1);
      }
    }
    }
    >
      -
    </button>

    <input type="text" name="name" value={quantity} className="input"/>
    
    <button className="plus-btn" type="button" name="button"
    onClick={() => setQuantity(quantity + 1)}
    >
      +
    </button>
   
    </div>

</div>

</div>
        </Col>
        <Col lg>
        <div className='right1'>
          <h2>Reviews</h2>
          <p>4.5 *</p>

          <div className='sizegrp'>
            <button className='sizebtn'>S</button>
            <button className='sizebtn'>M</button>
            <button className='sizebtn'>L</button>
            <button className='sizebtn'>XL</button>
          </div>
          
          <div className='colorgrp'>
            <button className='colorbtn red'></button>
            <button className='colorbtn blue'></button>
            <button className='colorbtn green'></button>
            <button className='colorbtn yellow'></button>
          </div>

            <button className='addtocartbtn'>Add to Cart</button>
        

        </div>
        </Col>
      </Row>
    </Container>

    <br></br>

    <Tabs
      defaultActiveKey="Description"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Description" title="Description">
        <h2>Description</h2>
      </Tab>
      <Tab eventKey="Offers" title="Offers">
        <h2>Offers</h2>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <h2>Reviews</h2>
      </Tab>
    </Tabs>

    </div>
    
 
  )
}

