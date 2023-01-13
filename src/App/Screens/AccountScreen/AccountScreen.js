import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./AccountScreen.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import colors from '../../Config/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import path from '../../Config/servAddr';

export default function Account({setTheme}) {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'green',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  })

  useEffect(() => {
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
      setUsername(res.data.username);
      setEmail(res.data.email);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  const handleLogout = () => {

    Swal.fire({
      title: 'Logout of Cartify ?',
      text: "Confirm!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: 'btn-success',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!'
    }).then((result) => {
        if(result.isConfirmed){
          const currentUser = localStorage.getItem('currentUser');
      localStorage.removeItem(`cartifyUser_${currentUser}`);
      localStorage.removeItem('currentUser');
      navigate('/');
      Toast.fire({
        icon: 'success',
        title: 'Cartify Misses You',
        text: 'Logged Out Successfully' 
     })
        }
    })
  }


  const [show, setShow] = useState(false);
  // const [theme, setTheme] = React.useState(colors.primary);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container className='accContainer'>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Your Best Theme</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div style={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginTop:"20px",
  flexWrap:"wrap"

}}>

<button onClick={() => {
  setTheme(colors.primary);
  localStorage.setItem(`CartifyTheme`, colors.primary);
}}
class="toggler" style={{background:colors.primary}}></button>
<button onClick={() => {
  setTheme("linear-gradient(to right, #f2709c, #ff9472)");
  localStorage.setItem(`CartifyTheme`, 'linear-gradient(to right, #f2709c, #ff9472)');
}} class="toggler" style={{background:"linear-gradient(to right, #f2709c, #ff9472)"}}></button>


<button onClick={() => {
  setTheme("linear-gradient(to right, #485563, #29323c)");
  localStorage.setItem(`CartifyTheme`, 'linear-gradient(to right, #485563, #29323c)');
}} class="toggler" style={{background:"linear-gradient(to right, #485563, #29323c)"}}></button>



<button onClick={() => {
  setTheme("linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )");
  localStorage.setItem(`CartifyTheme`, 'linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )');
}} class="toggler" style={{background:"linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )"}}></button>


<button onClick={() => {
  setTheme("linear-gradient(to right, #5c258d, #4389a2)");
  localStorage.setItem(`CartifyTheme`, 'linear-gradient(to right, #5c258d, #4389a2)');
}} class="toggler" style={{background:"linear-gradient(to right, #5c258d, #4389a2)"}}></button>


</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      

      <Row sm={2} md={2} lg={2} xs={1}>
        <Col
         style={{
          textAlign:"center",
        }}
        > 
          <div className="accprofile1">
          
          <div>
          <img src="https://i.pinimg.com/originals/9a/69/29/9a6929f30854dfeffcceb163945cd3b0.png" alt="Group-1" border="0"
              className="accimg"
              />

          </div>

          <div>
          <h3 className="accname">{username}</h3>
          <p className="accemail">{email}</p>
          <Button variant="primary" className="accbtn">
                  Edit Profile
                </Button>
          
          </div>

          </div>

              
        </Col>

        <Col
        
        >

          <Row lg={1} >

              <Col

              lg={9}

              style={{
                textAlign:"center",
                marginTop:"10%"
              }}
              >


                <Link to="/home/orders">

              <Button variant="primary" className="accbtn1" style={{
                margin:"1rem",
              }}
              >
                  My Orders
                </Button>

                </Link>

              <Link to="/home/wishlist">

              <Button variant="primary" className="accbtn1" style={{
                margin:"1rem"
              }}>
                 My Wishlist
                </Button>

              </Link>


              <Button variant="primary" className="accbtn1" style={{
                margin:"1rem",
              }}>
                  Return & Refund
                </Button>


              
                <Button variant="primary" onClick={handleShow} className="accbtn1" style={{
                  margin:"1rem",
                }}>
                  Choose Theme
                </Button>

                <Button variant="primary" onClick={handleLogout} className="accbtn1" style={{
                  margin:"1rem",
                }}>
                  Logout
                </Button>


                </Col>

          </Row>
              
        </Col>
      
      </Row>

      {/* <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
     
    </ThemeProvider> */}


    </Container>
  )
}


