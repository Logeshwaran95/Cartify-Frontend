import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./AccountScreen.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import colors from '../../Config/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';


export default function Account({setTheme}) {


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
  localStorage.setItem('CartifyTheme', colors.primary);
}}
class="toggler" style={{background:colors.primary}}></button>
<button onClick={() => {
  setTheme("linear-gradient(to right, #f2709c, #ff9472)");
  localStorage.setItem('CartifyTheme', 'linear-gradient(to right, #f2709c, #ff9472)');
}} class="toggler" style={{background:"linear-gradient(to right, #f2709c, #ff9472)"}}></button>
<button onClick={() => {
  setTheme("linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)");
  localStorage.setItem('CartifyTheme', 'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BD2FF 90%)');
}} class="toggler" style={{background:"linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)"}}></button>
<button onClick={() => {
  setTheme("linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)");
  localStorage.setItem('CartifyTheme', 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)');
}} class="toggler" style={{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"}}></button>
<button onClick={() => {
  setTheme("linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )");
  localStorage.setItem('CartifyTheme', 'linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )');
}} class="toggler" style={{background:"linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )"}}></button>
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
          <div className="profile1">
          
          <div>
          <img src="https://i.pinimg.com/originals/9a/69/29/9a6929f30854dfeffcceb163945cd3b0.png" alt="Group-1" border="0"
              className="accimg"
              />

          </div>

          <div>
          <h3 className="accname">John Doe</h3>
          <p className="accemail">hello@gmail.com</p>
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
              style={{
                textAlign:"center",
                marginTop:"10%"
              }}
              >
                <Link to="/orders">
              <Button variant="primary" className="accbtn"
              >
                  Your Orders
                </Button>
                </Link>
              <Button variant="primary" className="accbtn">
                  Your Favourites
                </Button>
              <Button variant="primary" className="accbtn">
                  Return & Refund
                </Button>
              
                <Button variant="primary" onClick={handleShow} className="accbtn">
                  Choose Theme
                </Button>


                </Col>

          </Row>
              
        </Col>
      
      </Row>

      <ThemeProvider
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
     
    </ThemeProvider>


    </Container>
  )
}


