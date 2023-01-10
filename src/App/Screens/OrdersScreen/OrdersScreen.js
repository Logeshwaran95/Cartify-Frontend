import React from 'react'
import "./OrdersScreen.css"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  const theme = localStorage.getItem('CartifyTheme');
  console.log(theme);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen
    >
      <Modal.Header closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Order Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
            // style={{
            //   background:theme
            // }}
      >
        <h4>PlayStation 5</h4>
        <br></br>
        <table>
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Order Date</th>
      <th scope="col">Shipping ID</th>
      <th scope="col">Shipping Address</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Price</th>
      <th scope="col">Arrival</th>
    </tr>
  </thead>
  <tbody style={{
    color:"black"
  }}>
    <tr>
      <td data-label="Order ID">V3412</td>
      <td data-label="Order Date">04/01/2016</td>
      <td data-label="Shipping ID">190</td>
      <td data-label="Shipping Address">Lorem ipsum aksnkasm amnsla knaslksadk alksdjlkasjd lkjdslksaj</td>
      <td data-label="Payment Method">Cash on Delivery</td>
      <td data-label="Price">$2016</td>
      <td data-label="Arrival">Sunday</td>
    </tr>

  </tbody>
</table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}
        variant="danger"
        >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function OrdersScreen() {

  const items = ['item1','item2','item3','item4','item5'];
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

<section id="order_testimonials">
 
  
 <div class="order_testimonial-box-container">
   
   
   {items.map((item) => 

     <div class="order_testimonial-box">
       
       <div class="order_box-top">
          
         
           <div class="order_profile">
            
             
               <div class="order_profile-img">
                   <img src="https://petapixel.com/assets/uploads/2017/03/product1.jpeg" />
               </div>
             
               <div class="order_name-user">
                   <strong>Play Station 5</strong>
                   <span>Order Summary</span>
               </div>
           </div>
        
           <div class="order_reviews">
               <h6>Arriving Sunday</h6>
           </div>
       </div>

       <div class="order_client-comment">
       <table>
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Shipping ID</th>
      <th scope="col">Total</th>
      <th scope="col">More Info</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Order ID">3412</td>
      <td data-label="Shipping ID">2016</td>
      <td data-label="Total">$1,190</td>
      <td data-label="More Info">

      <Button variant="primary"
      onClick={() => setModalShow(true)}
      >More</Button>
      </td>
    </tr>

  </tbody>
</table>
       </div>
   </div>

)}
   
  
     </div>
</section>

    </div>
  )
}
