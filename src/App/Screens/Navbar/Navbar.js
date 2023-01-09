import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, #e66465, #9198e5);
  }
`;

function OffcanvasExample() {
  return (
    <>
    
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3"
        breakpoint={expand}
        variant='dark'
        fixed='top'
        id="navbar"
        style={{
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
        
        
        >
          <Container fluid>
           
            <Navbar.Brand href="#"
            style={{
              fontSize: '1.5rem',
            }}
            >Cartify</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Cartify
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center mr-auto flex-grow-1 pe-3">
                <ul>
    <li class="myli"><a href="/" className="mya">
      <Link to="/"
      className="linkbtn"
      >home</Link>
      </a></li>
    <li class="myli"><a href="#" className="mya">  
     <Link to="/seller"
className="linkbtn"
      >Seller</Link>
      </a></li>
    <li class="myli"><a href="#" className="mya"> 
    <Link to="/cart"
    className="linkbtn"
      >Cart</Link>
       </a></li>
       <li class="myli"><a href="#" className="mya">
    <Link to="/"
   className="linkbtn"
      >Notifications</Link>
      </a></li>
    <li class="myli"><a href="#" className="mya"> 
    <Link to="/account"
className="linkbtn"
      >Account</Link>
       </a></li>
  </ul>
                  {/* <Nav.Link href="#" style={{marginLeft:"20px"}}>Home</Nav.Link>
                  <Nav.Link href="#" style={{marginLeft:"20px"}}>Cart</Nav.Link>
                  <Nav.Link href="#" style={{marginLeft:"20px"}}>Account</Nav.Link> */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{
                      margin:"2px",
                    }}
                  />
                  <Button variant="primary" 
                  onClick={() => {
                    alert("Search button clicked");
                  }}
                  >Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

