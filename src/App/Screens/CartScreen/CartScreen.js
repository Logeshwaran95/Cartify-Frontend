import React from 'react'
import "./CartScreen.css"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import path from '../../Config/servAddr';
import Loader from '../../Components/Loader';
import ScrollToTop from '../../Components/ScrollToTop';

export default function Cart() {

  const [cartitems, setCartItems] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);


  const getCartItems = async () => {
    console.log("user",user);
 
    try{
      setLoading(true);
      const response = await axios.get(`${path.local}/cart/find/${user && user.userId}`,{
        headers: {
          'Authorization': `bearer ${user.token}`
        }
      });
      // console.log("here is cartitems",response.data[0].products);
      setCartItems(response.data[0].products);
      console.log("cartitems",...response.data[0].products);
      
    }
    catch(err){
      
      console.log("in error");
      console.log(err.response.data);
      // setCartItems([]);
 
    }
    setLoading(false);
  }

  const handleRemove = async (id,title) => {

    // console.log("id",id);

    try{

      // const myObj = {
      //   productId: id
      // }
      console.log("user id-->",user.userId,"usertoken --->",user.token);
      
      const response = await axios.delete(`${path.local}/cart/${user && user.userId}`,
       
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
        text: `${title} removed from cart`,
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

  const handleIncrement = (id) => {

    console.log("increment",id);
    const newCart = cartitems.map((product) => {
      if(product._id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
          total: product.price * (product.quantity + 1)
        }
      }
      return product;
    })
    setCartItems(newCart);

  }

  const handleDecrement = (id) => {
    console.log("decrement",id);
    const newCart = cartitems.map((product) => {
      if(product._id === id) {
        return {
          ...product,
          quantity: product.quantity - 1,
          total: product.price * (product.quantity - 1)
        }
      }
      return product;
    })
    setCartItems(newCart);
  }


  return (
    <div>

      <ScrollToTop/>

      <h2 style={{
        color: 'white',
        textAlign: 'center',
        fontWeight:'800',
        letterSpacing: '1px'
      }}>Your Cart</h2>



    <Container
    style={{
      overflow: 'hidden'
    }}
    >

      {
        (cartitems.length === 0) && !loading && 
        <div
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}
        >
          <h3
          >Your Cart is Empty</h3>
          <Link to='/home'>
          <Button variant="primary" style={{
            marginTop: '1rem'
          }}>Go to Home</Button>
          </Link>
        </div>

      }

      <Loader loading={loading} />

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
            if(product.quantity > 1) {
              handleDecrement(product._id);
            }
            

          }
          }
          >
            -
          </button>
      
          <input type="text" name="name" value={product.quantity} className="input"/>
      
          <button className="plus-btn" type="button" name="button"
          onClick={() => handleIncrement(product._id)}
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
              handleRemove(product.productId,product.title);
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

    {cartitems.length > 0 &&

    <>

    
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
      <td data-label="No. of Items">
        {
          cartitems.reduce((acc, item) => acc + item.quantity, 0)
        }
      </td>
      <td data-label="Subtotal">
        {
          cartitems.reduce((acc, item ,quantity) => acc + item.price * item.quantity, 0).toFixed(2)
        }
      </td>
      <td data-label="Tax">
        {
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity , 0) * 0.18).toFixed(2)
        }
      </td>
      <td data-label="Shipping">
        {
          (cartitems.reduce((acc, item) => acc + item.price * item.quantity , 0) * 0.01).toFixed(2)
        }
      </td>
      <td data-label="Total">
        {
          (cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) 
          + 
          cartitems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.18
          + 
          cartitems.reduce((acc, item) => acc + item.price*item.quantity , 0) * 0.01
          ).toFixed(2)
        }
      </td>
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
    <Link to="/home/checkout" 

    state={{
      cart : cartitems
    }}
     
    >
      <Button variant="primary" 
      >
        Checkout
      </Button>
    </Link>
   </div>
   </>
}

 



    </div>
  )
}
