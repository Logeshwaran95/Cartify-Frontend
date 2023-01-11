import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./CheckoutScreen.css";

import Payment from "../Payment";

export default function CheckoutScreen() {


  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  })

  const handleCOD = () => {
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
        Swal.fire(
          'Success!',
          'Your Order has been Placed.',
          'success'
        ).then(()=> {
          navigate("/home");
        })
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
      <td data-label="No. of Items">5</td>
      <td data-label="Subtotal">$3412</td>
      <td data-label="Tax">$216</td>
      <td data-label="Shipping">$110</td>
      <td data-label="Total">$20020</td>
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
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
        <Form.Text className="text-muted">
          Enter Door number followed by Street ,Area and City Name.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Enter Country" />
        {/* <Form.Text className="text-muted">
          Enter Door number followed by Street ,Area and City Name.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Postcode</Form.Label>
        <Form.Control type="number" placeholder="Enter Postcode" />
        {/* <Form.Text className="text-muted">
          Enter Door number followed by Street ,Area and City Name.
        </Form.Text> */}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
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
      <Tab eventKey="Credit Card" title="Credit Card">
        
        <Payment />

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
