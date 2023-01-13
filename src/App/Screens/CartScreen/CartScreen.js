import React from 'react'
import "./CartScreen.css"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ShowChart } from '@mui/icons-material';

export default function Cart() {

  const [quantity, setQuantity] = React.useState(1);
  const [total, setTotal] = React.useState(1);

  const [cartitems, setCartItems] = React.useState([]);
  const [user, setUser] = React.useState({});





  const getCartItems = async () => {
    console.log("user",user);
    try{
      const response = await axios.get(`http://localhost:4000/cart/find/${user && user.userId}`,{
        headers: {
          'Authorization': `bearer ${user.token}`
        }
      });
      console.log("here is cartitems",response.data[0].products);
      setCartItems(response.data[0].products);
    }
    catch(err){
      console.log("in error");
      console.log(err.response.data);
    }
  }

  const handleRemove = async (id) => {

    // console.log("id",id);

    try{

      // const myObj = {
      //   productId: id
      // }
      console.log("user id-->",user.userId,"usertoken --->",user.token);
      
      const response = await axios.delete(`http://localhost:4000/cart/${user && user.userId}`,
       
        {
          headers: {
            Authorization: `bearer ${user.token}`
          },
          data: {
            productId: id
          }
        }

        
      )

      console.log(response.data);
      Swal.fire({
        title: 'Success',
        text: response.data,
        icon: 'success',
      })

      getCartItems();

    }
    catch(err){
      console.log(err);
    }
    }


  React.useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    const data = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    setUser(data);
    // console.log(user);
    getCartItems();

  },[user.userId])


  return (
    <div>

      <h2 style={{
        color: 'white',
        textAlign: 'center',
        fontWeight:'800',
        letterSpacing: '1px'
      }}>My Cart</h2>

    <Container
    style={{
      overflow: 'hidden'
    }}
    >

      <Row lg={4} sm={3} md={3}
          style={{
            width:"100vw",
            overflow:"hidden",
          }}>

        
          {

            cartitems &&
         
          cartitems.map(
            (product) => 
              <Col style={{
                margin:"1rem",
              }}>
                  
            <Card className='ordercard'>
            <Card.Img variant="top" src={product.image} 
            className='cardimg'
            />
            <Card.Body>
              <Card.Title
              style={{
                textAlign:"center",
                height:"1rem",
                fontSize:"1rem",
                fontWeight:"600",
              }}
              >{product.title}</Card.Title>
              {/* <Card.Text>
                Asus Rog is a  quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Quantity : 
                
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
      
      
                 </ListGroup.Item>
              <ListGroup.Item>Price : {product.price}</ListGroup.Item>
              <ListGroup.Item>Total :   
                   { product.total}
                
                 </ListGroup.Item>
            </ListGroup>
            <Card.Body
            style={{
              alignItems: 'center',
              height:'65px'
            }}
            >
            <Button variant="danger"
            style={{
              float: 'right',
            }}
            onClick={() => {
              handleRemove(product.productId);
            }}
            >Remove</Button>
            </Card.Body>
          </Card>
              </Col>
            
          )
   
      
        }
        
       

      


              
      </Row>

    </Container>

    <br></br>

    
    <h2 style={{
        color: 'white',
        textAlign: 'center',
        fontWeight:'800',
        letterSpacing: '1px',
        margin:'1.5rem',
      }}>Cart Summary</h2>

    <Container>
      <Row>
        <Col> 
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


        </Col>

      </Row>

    </Container>

    <br></br>

   <div
   style={{
      textAlign: 'center',
   }}
   >
    <Link to="/home/checkout">
      <Button variant="primary" >
        Checkout
      </Button>
    </Link>
   </div>

 



    </div>
  )
}
