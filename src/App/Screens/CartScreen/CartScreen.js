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

export default function Cart() {

  const [quantity, setQuantity] = React.useState(1);
  const [total, setTotal] = React.useState(1);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  })

  const items = ['item1', 'item2', 'item3', 'item4', 'item5']

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

        
          {items.map(
            () => 
              <Col style={{
                margin:"1rem",
              }}>
                  
            <Card className='ordercard'>
            <Card.Img variant="top" src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg" 
            className='cardimg'
            />
            <Card.Body>
              <Card.Title
              style={{
                textAlign:"center",
                height:"1rem",
              }}
              >Asus Rog</Card.Title>
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
              <ListGroup.Item>Price : 1</ListGroup.Item>
              <ListGroup.Item>Total :   
                   { total}
                
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
            >Remove</Button>
            </Card.Body>
          </Card>
              </Col>
            
          )}
        
       

      


              
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
