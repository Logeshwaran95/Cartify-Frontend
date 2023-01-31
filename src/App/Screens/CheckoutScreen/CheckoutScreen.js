import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import "./CheckoutScreen.css";

import Payment from "../Payment";
import axios from 'axios';
import path from '../../Config/servAddr';
import ScrollToTop from '../../Components/ScrollToTop';

export default function CheckoutScreen() {

  const location = useLocation();
  const cartitems  = location.state.cart;

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");


  // console.log(cartitems)

  const navigate = useNavigate();


  const finishCheckout = async () => {


      
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));

        try{

            const myObj = {

                userid: user.userId,
                orderDate: new Date(),
                orderStatus: "Confirmed",
                numberOfItems: cartitems.reduce((acc, item) => acc + item.quantity, 0),
                subtotal: cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0),
                tax: cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.18,
                shipping: cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.01,
                total: cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) + cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.18 + cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.01,
                paymentMethod: "Cash on Delivery",
                DeliveryInfo : {
                    name: name,
                    email: email,
                    address: address,
                    country: country,
                    postcode: postcode,
                    phoneNumber: phonenumber
                },
                products: cartitems.map((item) => {
                    return {
                        productId: item._id,
                        title: item.title,
                        image: item.image,
                        quantity: item.quantity,
                        subtotal: item.price,
                        tax: item.price * 0.18,
                        shipping: item.price * 0.01,
                        total: item.price + item.price * 0.18 + item.price * 0.01,
                        arrivalStatus:"Tentative"
                    }
                })


            }
            console.log("here is payload",myObj);

            const response = await axios.post(`${path.local}/order`,
            myObj,
            {
                headers: {
                    Authorization: `bearer ${user.token}`
                }
            });

            console.log(response.data);
            Swal.fire(
              'Success!',
              'Your Order has been Placed.',
              'success'
            ).then(()=> {
              navigate("/home");
            })
        
        }
        catch(err){
            console.log(err.response.data);
            Swal.fire(
              'Error!',
              'Something went wrong. Please try again later.',
              'error'
            )
        }


  }


  const handleCOD = () => {

    if(email === "" || name === "" || address === "" || country === "" || postcode === "" || phonenumber === "")
    {

      Swal.fire(
        'Error!',
        'Please fill all the fields.',
        'error'
      )
      return;
    }
    else{
      
      if(RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(email) === false){
        Swal.fire(
          'Error!',
          'Please enter a valid email address.',
          'error'
        )
        return;
      }
      if(RegExp(/^[0-9]{10}$/).test(phonenumber) === false){
        Swal.fire(
          'Error!',
          'Please enter a valid phone number.',
          'error'
        )
        return;
      }
      if(RegExp(/^[0-9]{6}$/).test(postcode) === false){
        Swal.fire(
          'Error!',
          'Please enter a valid postcode.',
          'error'
        )
        return;
      }
    }

    Swal.fire({
      title: 'Are you sure you want to proceed?',
      text: "Cash on Delivery !",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: 'btn-success',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!'
    }).then((result) => {
      if (result.isConfirmed) {

        finishCheckout();

      }
      else{
        Swal.fire(
          'Cancelled',
          'Your Order has been Cancelled',
          'error'
        )
      }
    })
  }


  return (
    <div>

      <ScrollToTop/>

        <Container>

        <h2 style={{
          textAlign: 'center',
          margin: '2rem',
          fontWeight: '600',
          color:'white',
          letterSpacing:'2px'

        }}>Checkout</h2>

<table>
  <thead>
    <tr>
    <th scope="col">
        No. of Items
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
          cartitems.reduce((acc, item) => acc + item.quantity, 0)
        }
      </td>
      <td data-label="Subtotal">
        {
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0)).toFixed(2)
        }
      </td>
      <td data-label="Tax">
        {
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.18).toFixed(2)
        }
      </td>
      <td data-label="Shipping">
        {
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.01).toFixed(2)
        }
      </td>
      <td data-label="Total">
        { 
        (
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0))
          +
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.18)
          +
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.01)
        ).toFixed(2)
        }
      </td>
    </tr>
   
 
  </tbody>
</table>

</Container>


         <Container
    style={{
      overflow: 'hidden',
      marginTop: '2rem',
      width: '100vw'
    }}
    >

      <Row 
      style={{
        width: '100vw',
        overflow: 'hidden'
      }}
      lg={2} 
      sm={1}
      xs={1}
      md={1}
      >
        <Col>
            <h2 className='checkout_title'>Delivery Details</h2>

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
        value={name}
        onChange={(e)=> setName(e.target.value)}

        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" 
        value={address}
        onChange={(e)=> setAddress(e.target.value)}
        />
        <Form.Text className="text-muted">
          Enter Door number followed by Street ,Area and City Name.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Enter Country"
        value={country}
        onChange={(e)=> setCountry(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          Enter Door number followed by Street ,Area and City Name.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Postcode</Form.Label>
        <Form.Control type="number" placeholder="Enter Postcode" 
        value={postcode}
        onChange={(e)=> setPostcode(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          Enter Door number followed by Street ,Area and City Name.
        </Form.Text> */}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" 
        value={phonenumber}
        onChange={(e)=> setPhonenumber(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
{/* 
      <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>



        </Col>
        
        <Col >
            <h2 className='checkout_title'
            
            >Payment Details</h2>

            <Tabs
      defaultActiveKey="cod"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="cod" title="COD">
        
        {/* <h2 className='title'>Cash on Delivery</h2> */}
        <Button variant="primary"
        onClick={() => {
          handleCOD();
        }}
        >Proceed with Cash On Delivery</Button>

      </Tab>
      <Tab eventKey="Credit Card" title="Credit Card" disabled>
        
        {/* <Payment /> */}

      </Tab>
      <Tab eventKey="UPI" title="UPI" disabled>
      {/* <h2>not enabled</h2> */}
      </Tab>
    </Tabs>
        </Col>

      </Row>
            
    </Container>
    </div>
  )
}
