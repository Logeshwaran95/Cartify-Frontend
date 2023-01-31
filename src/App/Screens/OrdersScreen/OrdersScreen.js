import React from 'react'
import "./OrdersScreen.css"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import path from '../../Config/servAddr';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../../Components/Loader';
import ScrollToTop from '../../Components/ScrollToTop';

function MyVerticallyCenteredModal(props) {
  const theme = localStorage.getItem('CartifyTheme');
  console.log(theme);

  const product = props.data;
  const order = props.order;

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
        <h4>
          {
            product.title
          }
        </h4>
        <br></br>
        <table>
  <thead>
    <tr>
      {/* <th scope="col">Order ID</th> */}
      <th scope="col">Order Date</th>
      <th scope="col">Shipping Address</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Sub Total</th>
      <th scope="col">Tax</th>
      <th scope="col">Shipping</th>
      <th scope="col">Final Price</th>
      <th scope="col">Arrival</th>
    </tr>
  </thead>
  <tbody style={{
    color:"black"
  }}>
    <tr>
      {/* <td data-label="Order ID">
        {
          order._id.slice(-10)
        }
      </td> */}
      <td data-label="Order Date">
        {
          order.createdAt.slice(0,10)
        }
      </td>
      <td data-label="Shipping Address">
        {
          order.DeliveryInfo.address
        }
      </td>
      <td data-label="Payment Method">
        {
          order.paymentMethod
        }
      </td>
      <td data-label="SubTotal">
        {
          (product.subtotal * product.quantity).toFixed(2)
        }
      </td>
      <td data-label="Tax">
        {
          (product.tax* product.quantity).toFixed(2)
        }
      </td>
      <td data-label="Shipping">
        {
          (product.shipping*product.quantity).toFixed(2)
        }
      </td>
      <td data-label="Final Price">
        {
          (product.total*product.quantity).toFixed(2)
        }
      </td>
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

  const [orders, setOrders] = React.useState([]);
  const [modalData, setModalData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getOrders = async () => {
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    try{

          setLoading(true);
          const response = await axios.get(`${path.local}/order/find/${user.userId}`,{
            headers: {
              Authorization: `bearer ${user.token}`
            },
            params: {
              userId: user.userId
            }
            
          });
          console.log(response.data);
          setOrders(response.data);
          setLoading(false);
    }
    catch(error){
      console.log(error);
    }
  }




  React.useEffect(() => {
      getOrders();
  },[])

  const [modalShow, setModalShow] = React.useState(false);

  const handleClick = (product) => {
    setModalData(product);
    setModalShow(true);
  }

  const cancelOrder = async (order) => {
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    try{

      const response = await axios.delete(`${path.local}/order/${order._id}`,{
        headers: {
          Authorization: `bearer ${user.token}`
        },
      }
      );
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Order Cancelled',
        text: 'Your order has been cancelled',
      })
      getOrders();
  }
  catch(error){
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
  }

  const handleCancel = async (order) => {

      Swal.fire({
        title: 'Cancel the order ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
          cancelOrder(order);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'You cancelled the action',
            text: 'Action Reverted',
          })
        }


      })

  }

  return (
    <div>

      <ScrollToTop/>

      <h2
      style={{
        textAlign: 'center',
        margin: '1rem',
        fontWeight: '600',
        letterSpacing: '1px',
        color: 'white',
      }}
      >
        Your Orders
      </h2>

      <Loader loading={loading} />





<section id="order_testimonials">

  {
    orders.length === 0 && !loading &&
    <>
        <h2 
        style={{
          textAlign: 'center',
          margin: '1rem',
          fontWeight: '600',
          letterSpacing: '1px',
          color: 'white',

        }}
        >
          No Orders Yet
        </h2>
        <Link to="/home">
          <Button variant='primary' >
            Shop Now
          </Button>
          </Link> 
    </>
  }

  {orders.map((order) =>

  <>

<h2
  style={{
    textAlign: 'center',
    margin: '1rem',
    fontWeight: '600',
    letterSpacing: '1px',
    color: 'white',
  }}
  >
    Order ID : {
      order._id.slice(-10)
    }
  </h2>

  <Button variant="primary" onClick={() => handleCancel(order)}
  style={{
    margin: '1rem',
  }}
  >
    Cancel Order
  </Button>


  <table>
  <thead>
    <tr>
    <th scope="col">
        No. of Items
      </th>
      <th scope="col">
        Order Date
      </th>
      <th scope="col">
        Subtotal
      </th>
      <th scope="col">
        Tax
      </th>
      <th scope="col">
        Shipping
      </th>
      <th scope="col">
        Total
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="No. of Items">
        {
          order.products?.reduce((acc, item) => acc + item.quantity, 0)
        }
      </td>
      <td data-label="Order Date">
        {
          order.createdAt.slice(0,10)
        }
      </td>
      <td data-label="Subtotal">
        {
          order.subtotal.toFixed(2)
        }
      </td>
      <td data-label="Tax">
        {
          order.tax.toFixed(2)
        }
      </td>
      <td data-label="Shipping">
        {
          order.shipping.toFixed(2)
        }
      </td>
      <td data-label="Total">
        {
          order.total.toFixed(2)
        }
      </td>
    </tr>
   
 
  </tbody>
</table>

  

  
 <div class="order_testimonial-box-container">
   
   
   {order.products.map((product) => 

   <>


     <div class="order_testimonial-box">
       
       <div class="order_box-top">
          
         
           <div class="order_profile">
            
             
               <div class="order_profile-img">
                   <img src={
                      product.image
                   } />
               </div>
             
               <div class="order_name-user">
                   <strong>
                        {product.title}
                   </strong>
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
      <th scope="col">Quantity</th>
      {/* <th scope="col">Shipping ID</th> */}
      <th scope="col">Price</th>
      <th scope="col">Total</th>
      <th scope="col">More Info</th>



    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Quantity">
        {
          //last digit of order id
          product.quantity
        }
      </td>
      {/* <td data-label="Shipping ID">2016</td> */}
      <td data-label="price">
        {
          product.subtotal
        }
      </td>
      <td data-label="Total">
        {
          (product.total*product.quantity).toFixed(2)
        }
      </td>
      <td data-label="More Info">

      <Button variant="primary"
      onClick={() => handleClick(product) }
      >More</Button>

      </td>
    </tr>

  </tbody>
</table>
       </div>
   </div>

           
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
        order={order}
      />

   </>
   

)}  


   
  
     </div>

  </>

  )}

</section>

    </div>
  )
}
