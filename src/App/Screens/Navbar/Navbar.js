import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import path from '../../Config/servAddr';

// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: linear-gradient(to right, #e66465, #9198e5);
//   }
// `;

function OffcanvasExample() {

  const navigate = useNavigate();

  const navRef = React.useRef(null);
  const [navbarColor, setNavbarColor] = React.useState("transparent");
  const [searchQuery, setSearchQuery] = React.useState("");

  const [user,setUser] = React.useState({});


  
  React.useEffect(() => {

    getUser();

    const handleScroll = () => {
      if (navRef.current) {
        if (window.pageYOffset > navRef.current.offsetTop) {
          setNavbarColor("white");
        } else {
          setNavbarColor("transparent");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);

    if(searchQuery === ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a search query!',
      })
      return;
    }

    navigate(`/home/product/search/${searchQuery}`);
  }

  const getUser = async () => {
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    setUser(user);
    // console.log(user);
    axios.get(`${path.local}/user/find/${user.userId}`, {
      headers: {
        'authorization': `bearer ${user.token}`
      }
    }).then(res => {
      console.log(res.data);
      setUser(res.data);

    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
    
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3"

        breakpoint={expand}
       
        fixed='top'
        // ref={navRef}
        id="navbar"
        style={{
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          // position:'sticky',
          // top: '0',
          // zIndex: '1',
          // backgroundColor: navbarColor,
          // transition: 'background-color 0.5s ease',
        }}
        
        
        >
          <Container fluid>
           
           <Link to="/home">

            <Navbar.Brand
            style={{
              fontSize: '1.5rem',
              color: 'white',
            }}
            >
              {/* <img 
              src="cartify1.png"
              className="logo"
              /> */}
              Cartify
            </Navbar.Brand>

            </Link>
            
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
    <li class="myli"><a className="mya">
      <Link to="/home"
      className="linkbtn"
      >home</Link>
      </a></li>
    {/* <li class="myli"><a href="#" className="mya">  
     <Link to="/seller"
className="linkbtn"
      >Seller</Link>
      </a></li> */}
    <li class="myli"><a className="mya"> 
    <Link to="/home/cart"
    className="linkbtn"
      >Cart</Link>
       </a></li>
       {/* <li class="myli"><a href="#" className="mya">
    <Link to="/"
   className="linkbtn"
      >Notifications</Link>
      </a></li> */}


       <li class="myli"><a className="mya"> 
    <Link to="/home/product/filter"
className="linkbtn"
      >Filter</Link>
       </a></li>

       <li class="myli"><a className="mya"> 
    <Link to="/home/account"
className="linkbtn"
      >Account</Link>
       </a></li>

      {
        user.isAdmin?
        <li class="myli"><a className="mya"> 
        <Link to="/home/admin"
    className="linkbtn"
          >Admin</Link>
           </a></li>
        :
        null
       }


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
                <Form className="d-flex"
                 onSubmit={
                  (e) => {
                    handleSearch(e);
                  }
                }
                >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{
                      margin:"2px",
                    }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                   
                
                  />
                  <Button variant="primary" 
                  style={{
                    height:"43px",
                  }}
                  id="searchbtn"
                  onClick={
                    (e) => {
                      handleSearch(e);
                    }
                  }
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

