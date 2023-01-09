import { borderRadius } from '@mui/system';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductScreen from '../ProductScreen/ProductScreen';

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
          <h2>Reviews Overall 
            <span 
            style={{
              color:"yellow",
            }}
            > 4.5</span>
             </h2>
          <p>1234 ratings</p>
          <div class="reviews">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="far fa-star"></i>
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

            <button className='addtocartbtn'>Add to Cart</button>
        

        </div>
        </Col>
      </Row>
    </Container>

    <br></br>

    <Tabs
      defaultActiveKey="Description"
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
        </p>

      </Tab>
      <Tab eventKey="Offers" title="Offers">
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
      <td data-label="Due Date">04/01/2016</td>
      <td data-label="Amount">$1,190</td>
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
      <Tab eventKey="Reviews" title="Reviews">
        <h2
        className='title'
        >Reviews</h2>

<section id="testimonials">
 
  
 <div class="testimonial-box-container">
   
   
     <div class="testimonial-box">
       
         <div class="box-top">
            
           
             <div class="profile">
              
               
                 <div class="profile-img">
                     <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                 </div>
               
                 <div class="name-user">
                     <strong>Liam mendes</strong>
                     <span>@liammendes</span>
                 </div>
             </div>
          
             <div class="reviews">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="far fa-star"></i>
             </div>
         </div>

         <div class="client-comment">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
         </div>
     </div>

     <div class="testimonial-box">
       
       <div class="box-top">
          
         
           <div class="profile">
            
             
               <div class="profile-img">
                   <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
               </div>
             
               <div class="name-user">
                   <strong>Liam mendes</strong>
                   <span>@liammendes</span>
               </div>
           </div>
        
           <div class="reviews">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="far fa-star"></i>
           </div>
       </div>

       <div class="client-comment">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
       </div>
   </div>



   <div class="testimonial-box">
       
       <div class="box-top">
          
         
           <div class="profile">
            
             
               <div class="profile-img">
                   <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
               </div>
             
               <div class="name-user">
                   <strong>Liam mendes</strong>
                   <span>@liammendes</span>
               </div>
           </div>
        
           <div class="reviews">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="far fa-star"></i>
           </div>
       </div>

       <div class="client-comment">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
       </div>
   </div>
   
   
  
     </div>
</section>

      </Tab>
    </Tabs>

    <h2 className='title'>
      Similar Products
    </h2>
      
     <ProductScreen/>

    </div>
    
 
  )
}

