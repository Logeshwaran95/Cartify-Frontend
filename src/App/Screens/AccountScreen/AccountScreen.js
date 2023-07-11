import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./AccountScreen.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import colors from '../../Config/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import path from '../../Config/servAddr';
// import { colors } from '@mui/material';

export default function Account({setTheme}) {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const colorsArr = [
    colors.primary,
    "linear-gradient(to right, #f857a6, #ff5858)",
    "linear-gradient(to right, #485563, #29323c)",
    "linear-gradient(to right bottom, #f24444, #ff1964, #ff008e, #ff00c0, #ff00f9)",
    "linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)",
    "linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )",
    
    "linear-gradient(to right, #5c258d, #4389a2)"
  ]

  
  

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

  const getUserDetails = async () => {
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
      setProfile(res.data.profilePicture);
      setAddress(res.data.address);
      setCity(res.data.city);
      setCountry(res.data.country);
      setPhonenumber(res.data.phoneNumber);

    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
        getUserDetails();
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
  const [showEdit,setShowEdit] =useState(false);
  // const [theme, setTheme] = React.useState(colors.primary);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = async () => {

    if(address==""
    && 
    city==""
    &&
    country==""
    &&
    phonenumber==""

    ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Fill All Fields',
      })
    }
    else{

      const currentUser = localStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
      setUser(user);
      // console.log(user);


      try{
        const response = await axios.put(`${path.local}/user/${user.userId}`, {
          username:username,
          email:email,
          address: address,
          city: city,
          country: country,
          phoneNumber: phonenumber
          
        },{
          headers: {
            'authorization': `bearer ${user.token}`
          }
        });
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated',
          text: 'Profile Updated Successfully',

        })
        .then(
          handleCloseEdit()
        )
        console.log(response.data);
  

      }
      catch(err){
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
        })
      }


  }
}

  const handleUploadToDB = async (url) => {
    try{
      const currentUser = localStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
      setUser(user);

      const response = await axios.put(`${path.local}/user/${user.userId}`, {
        profilePicture: url
      },{
        headers:{
          'authorization': `bearer ${user.token}`
        }
      });
      console.log("here is ",response.data);
      Swal.fire({
        icon: 'success',
        title: 'Profile Picture Updated',
        text: 'Profile Picture Updated Successfully',
      })
      setProfile(url);
      getUserDetails();

    }
    catch(err){
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err
      })
    }
  }


  return (
    <Container className='accContainer'>

<Modal show={showEdit} onHide={handleCloseEdit}
size="lg"
>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
        className="editlabel"
        >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
        className="editlabel"
        >Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
      </Form.Group>
      

  

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
        className="editlabel"
        >Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" 
        value={address}
        onChange={(e)=> setAddress(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
        className="editlabel"
        >City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" 
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        />

      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
        className="editlabel"
        >Country</Form.Label>
        <Form.Control type="text" placeholder="Enter Country" 
        value={country}
        onChange={(e)=> setCountry(e.target.value)}
        />

      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
        className="editlabel"
        >Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" 
        value={phonenumber}
        onChange={(e)=> setPhonenumber(e.target.value)}
        />

      </Form.Group>

      </Form>




        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="danger" onClick={handleCloseEdit}>
            Close
          </Button> */}
          <Button variant="danger"
          onClick={()=>{
            handleEdit()
          }}
          >Save Changes</Button>
        </Modal.Footer>
      </Modal>

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

  {
    colorsArr.map((color, index) => {
      return(
        <button onClick={() => {
          setTheme(color);
          localStorage.setItem(`CartifyTheme`, color);
        }}
        class="toggler" style={{background:color}}></button>
      )
    }
    )
  }

{/* <button onClick={() => {
  setTheme(colors.primary);
  localStorage.setItem(`CartifyTheme`, colors.primary);
}}
class="toggler" style={{background:colors.primary}}></button>
<button onClick={() => {
  setTheme("linear-gradient(to right, #f857a6, #ff5858)");
  localStorage.setItem(`CartifyTheme`, 'linear-gradient(to right, #f857a6, #ff5858)');
}} class="toggler" style={{background:"linear-gradient(to right, #f857a6, #ff5858)"}}></button>


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
}} class="toggler" style={{background:"linear-gradient(to right, #5c258d, #4389a2)"}}></button> */}


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
          
          <div
          className='imgcontainer'
          onClick={
            () => {
              Swal.fire({
                title: 'Change Profile Picture',
                input: 'file',
                inputAttributes: {
                  'accept': 'image/*',
                  'aria-label': 'Upload your profile picture'
                },
                showCancelButton: true,
                confirmButtonText: 'Upload',
                showLoaderOnConfirm: true,
                preConfirm: (file) => {
                  const reader = new FileReader()
                  reader.readAsDataURL(file)
                  reader.onload = () => {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', 'ypic2wey');
                    axios.post('https://api.cloudinary.com/v1_1/dhkcw3quq/image/upload', formData)
                    .then((res) => {
                      console.log("here is url",res.data.secure_url);
                  
                      handleUploadToDB(res.data.secure_url)
        
                    })
                    .catch((err) => {
                      console.log(err);
                      Swal.fire({
                        title: 'Error Uploading Profile Picture',
                        icon: 'error',
                        confirmButtonText: 'Done'
                      })
                    })
                  }
                }
              })
            }
          }
          >
          <img src={
            profile? profile : "https://i.pinimg.com/originals/9a/69/29/9a6929f30854dfeffcceb163945cd3b0.png"
          } alt="Group-1" border="0"
              className="accimg"
              />

          </div>

          <div>
            
          <h3 className="accname">{
            username
          }</h3>
          <p className="accemail">{
            email
          }</p>
          <Button variant="primary" className="accbtn"
          onClick={
            () => {
              setShowEdit(true);
            }
          }
          >
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
              }}
              onClick={() => {
                Swal.fire({
                  title: 'Return & Refund',
                  text: 'We are happy to help you with your return and refund. Please contact us at Cartify@gmail.com',
                  icon: 'info',

                })
              }}
              >
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


