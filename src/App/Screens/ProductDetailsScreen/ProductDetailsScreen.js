import { borderRadius } from '@mui/system';
import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';
import ProductScreen from '../ProductScreen/ProductScreen';
import { useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';

import './ProductDetailsScreen.css';
import Swal from 'sweetalert2';
import axios from 'axios';

import path from '../../Config/servAddr';
import { get } from 'mongoose';


export default function ProductDetailsScreen() {

  const location = useLocation();
  const { product } = location.state;

  const [currImage, setCurrImage] = React.useState(product && product.image);
  const [quantity, setQuantity] = React.useState(1);
  const [currTab,setCurrTab] = React.useState('Description');

  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState('');
  const [reviewdata, setReviewData] = React.useState([]);
  const [reviewCount, setReviewCount] = React.useState(6);

  const [show, setShow] = React.useState(false);

  function handleShow() {
    setShow(true);
  }



  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // })


  const handleAddToCart = async (product) => {

    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    const checkCartExist =  localStorage.getItem(`CartifyCart_${currentUser}`);
    console.log("here is token",user.token);

    console.log("here is product",product);
    

    if(!checkCartExist) {

      const myobj = {

        userId: user.userId,
        products: {
          productId: product._id,
          title: product.title,
          image: product.image,
          quantity: quantity,
          price: product.currentPrice,
          total: product.currentPrice * quantity
        }
      }

      console.log("myobj",myobj);

      try{

        const response = await axios.post(`${path.local}/cart/`,
        myobj
        ,{
          headers: {
            Authorization: `bearer ${user.token}`
          }
        }
        
        )

        
        localStorage.setItem(`CartifyCart_${currentUser}`, "true");
        console.log(response);
        Swal.fire({
          title: `${product.title} Added to cart`,
          text: 'You can check your cart to proceed to checkout',
          icon: 'success',
        })

      }
      catch(err){
        console.log(err);
      }
        




    }
    else{
        try{

          const myobj = {
              products:[
                {
                  productId: product._id,
                  title: product.title,
                  image: product.image,
                  quantity: quantity,
                  price: product.currentPrice,
                  total: product.currentPrice * quantity
                }
              ]
          }
            
          const response = await axios.put(`${path.local}/cart/${user.userId}`,
          myobj
          ,{
            headers: {
              Authorization: `bearer ${user.token}`
            }
          }
          
          )
          Swal.fire({
            title: `${product.title} Added to cart`,
            text: 'You can check your cart to proceed to checkout',
            icon: 'success',
          })
            console.log(response);

        }
        catch(err){
            console.log("it is error",err);
            Swal.fire({
              title: 'Error',
              text: err.response.data,
              icon: 'error',
            })
            
        }
    }

  }

  const handleReview = async () => {

      if(rating !== 0 && review !== ''){
        console.log("rating",rating);
        console.log("review",review);
        const currentUser = localStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
  
      const myobj = {
        userId: user.userId,
        userName: user.username,
        rating:rating,
        review:review,
        productId: product._id,
      }
  
      try{
  
        const response = await axios.post(`${path.local}/review/`,
        myobj
        ,{
          headers: { Authorization: `bearer ${user.token}` }
        }
        )
        console.log(response.data);
        Swal.fire({
          title: 'Review Added',
          text: 'Your review has been added',
          icon: 'success',
        })
      }
      catch(err){
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: err.response.data,
          icon: 'error',
        })
        
      }
      }
      else{
        Swal.fire({
          title: 'Error',
          text: 'Please enter a rating and review',
          icon: 'error',
        })
        return;
      }

      setShowReviewModal(false);
      getAllReviews();
      
      
  }

  const getAllReviews = async () => {
    try{
      const response = await axios.get(`${path.local}/review/find/${product._id}`)
      console.log(response.data);
      setReviewData(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  React.useEffect(() => {
    getAllReviews();
  },[]);

  return (

    <>

    {product &&

    
    <div>

<Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageGallery
          images={product.gallery}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showReviewModal}
      fullscreen
      onHide={() => setShowReviewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    placeholder="Write your review here"
                    onChange={(e) => setReview(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select"
                    placeholder='Select Rating'
                    onChange={(e) => setRating(e.target.value)}
                    >
                     <option>Select Rating</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>

                    </Form.Control>
                </Form.Group>
                <br></br>

                <Button variant="danger"
                onClick={() => handleReview()}
                >
                    Post Review
                </Button>


            </Form>


        </Modal.Body>
      </Modal>






        <Container className="container1">
      <Row>
        <Col lg>
        <div className='left1'>
          <h2>{product.title}</h2>
          <p>
            {product.shortDescription}
          </p>
          <div className='imgchoicegrp'>

            {/* map only first three images */}
        

            {product.gallery.slice(0,3).map((image) => (
                   <img src={image} className='imgchoice'
                   onClick={() => setCurrImage(image)}
                   />
            ))}

            
        
          </div>
       </div>
        </Col>
        <Col lg>
        <div className='center'>

<div className='centerImg'>
    <img
    src={currImage}
    onClick={() => handleShow()}
    />
    <h3 
    style={{
        textAlign: 'center',
        color: 'white',
        marginTop: '20px',
        marginBottom: '20px',
    }}
    >${product.originalPrice *quantity}</h3>

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
          <h2>Reviews Overall 
            <span 
            style={{
              color:"yellow",
            }}
            > {product.rating}</span>
             </h2>
          <p>1234 ratings</p>
          <div class="reviews">
              {product.rating >= 1 ? 
              
              Array.from({length: product.rating}, () =>
              <i class="fas fa-star"></i>) :
              
              
              <i class="far fa-star"></i>}

           </div>

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

            <button className='addtocartbtn'
            onClick={() => handleAddToCart(product)}
            >Add to Cart</button>
        

        </div>
        </Col>
      </Row>
    </Container>

    <br></br>

    <Tabs
      defaultActiveKey={currTab}
      id="justify-tab-example"
      className="myClass"
      justify
    >
      <Tab eventKey="Description" title="Description"
      style={{
        color: "white",
      }}
      >
        <h2 
        className="title"
        >Description</h2>

        <p className='desc'>
        {product.description}
        </p>

      </Tab>
      <Tab eventKey="Offers" title="Offers"
      >
        <h2 
        className='title'
        >Offers</h2>

  <table>
  <thead>
    <tr>
      <th scope="col">Account</th>
      <th scope="col">Validity</th>
      <th scope="col">Discount</th>
      <th scope="col">Period</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">Visa - 3412</td>
      <td data-label="Validity">04/01/2016</td>
      <td data-label="Discount">$1,190</td>
      <td data-label="Period">03/01/2016 - 03/31/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Visa - 6076</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$2,443</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Corporate AMEX</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$1,181</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Acount">Visa - 3412</td>
      <td data-label="Due Date">02/01/2016</td>
      <td data-label="Amount">$842</td>
      <td data-label="Period">01/01/2016 - 01/31/2016</td>
    </tr>
  </tbody>
</table>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews"
      onClick={() => setCurrTab('Reviews')}
      >
       
       <div 
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        margin:"auto",
        flexWrap: "wrap",
       }}
       >

       <h2
        className='title'
        >Reviews</h2>
      
        {/* {
          reviewdata.length > 0 &&
        
        <Link to='/home/product/reviews'
        state={
          {
            review: reviewdata,
          }
        }
        >
        <Button variant="primary"
        >View All</Button>
        </Link>

        } */}

        <Button variant="primary"
        onClick={() => setShowReviewModal(true)}
        >Write a Review</Button>

       </div>
      

        

<section id="testimonials">
 
  
 <div class="testimonial-box-container">
   
   {
    reviewdata.length === 0 &&
    <h2
    style={{
      color: "white",
      fontWeight: "bold",
      letterSpacing: "1px",
    }}
    >No Reviews</h2>
   }
   
   {
   reviewdata &&
   reviewdata.slice(0,reviewCount).map((item) => 

     <ReviewCard data={
      item
     }
     gatherReviews={getAllReviews}
     />

)}   
<br></br>

    
  
     </div>
     {
        reviewdata.length > reviewCount &&
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          margin:"auto",
          flexWrap: "wrap",
        }}
        >
        <Button variant="primary"
        onClick={() => setReviewCount(reviewCount + 4)}
        >Load More</Button>
        </div>

     }
</section>

      </Tab>
    </Tabs>

    <h2 className='title'>
      Similar Products
    </h2>
      
     <ProductScreen/>

    </div>

}

    </>
    
 
  )
}

