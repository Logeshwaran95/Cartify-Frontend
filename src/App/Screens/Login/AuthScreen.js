import React, {  useEffect,useState } from 'react';
import styles from './Auth.module.css';

import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Swal from 'sweetalert2'; 

import AOS from 'aos';


const Form = () => {

   // useEffect(() => {
   //    AOS.init({
   //      duration : 2000
   //    });
   //  }, []);

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
    

   const [islogin, setIslogin] = useState(true);
   
   const [semail, setSemail] = useState('');
   const [spsswd, setSpsswd] = useState('');
   const [sconfirmpsswd, setSconfirmpsswd] = useState('');
   
   const [lemail, setLemail] = useState('');
   const [lpsswd, setLpsswd] = useState('');

  

   const [hover, setIsHover] = useState(false);
   const [hover1, setIsHover1] = useState(false);
   const [hover2, setIsHover2] = useState(false);
   const [hover3, setIsHover3] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };


   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const handleMouseEnter1 = () => {
     setIsHover1(true); 
   }
   const handleMouseLeave1 = () => {
       setIsHover1(false); 
   }
   const handleMouseEnter2 = () => {
         setIsHover2(true); 
   }
   const handleMouseLeave2 = () => {
         setIsHover2(false); 
   }
   const handleMouseEnter3 = () => {
         setIsHover3(true); 
   }
   const handleMouseLeave3 = () => {
         setIsHover3(false); 
   }

   const navigate = useNavigate();

   const mystyle = {
      icon:{
         fontSize: "30px",
         lineHeight: "60px",
         transition: ".1s",
         color:"black",
         // color: isHover? "black" : "white",
         marginTop: "12px",

      },
      icon1:{
         fontSize: "30px",
         lineHeight: "60px",
         transition: ".1s",
         color:"white",
         marginTop: "12px",
      }
   }

   const handleSubmit = (e) => {
         e.preventDefault();

         if(islogin){
            if(lemail !== '' && lpsswd !== ''){

               if(lemail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                  console.log("successfully logged in ",lemail);
                  navigate('/home',{
                     replace:true
                  });
                  Toast.fire({
                     icon: 'success',
                     title: 'Welcome To Cartify',
                     text: 'You have successfully logged in'
                  })
               }
               else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Email',
                    })
               }
            }
            else{
               Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: lemail===""?"Please enter your email":"Please enter your password",
              })
            }
         }
         else{
            console.log("in signup");
            if(semail !== '' && spsswd !== '' && sconfirmpsswd !== ''){

               if(!semail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                  Swal.fire({
                     icon: 'error',
                     title: 'Oops...',
                     text:'Invalid Email'
                  })
                  return;
               }  

               if(spsswd !== sconfirmpsswd){
                  Swal.fire({
                     icon: 'error',
                     title: 'Oops...',
                     text:'Password does not match'
                  })
                  return;
               }
               else{
                  console.log("successfully signed up ",semail);
                  navigate('/home',
                  {
                     replace:true
                  });
                  Toast.fire({
                     icon: 'success',
                     title: 'Welcome To Cartify',
                     text: 'You have successfully signed up'
                  })
               }
            }
            else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: semail===""?"Please enter your email":spsswd===""?"Please enter your password":"Please confirm your password",
                })
            }
         }
         
   }



   

   return (
      <div className={styles.container}>
         <div className={styles.text}>
            <h2 style={{fontSize:"3rem",fontWeight:800,color:"white"}}
            data-aos="zoom-out-down"
            >Welcome to Cartify</h2>
            <h2 style={{fontWeight:800,color:"white"}}>Your One Stop For Everything !</h2>


            <div className={styles.social_menu}
            data-aos="fade-up"
            // data-aos-anchor-placement="bottom-center"
            >
               <ul className={styles.social_menu_ul}>
                  <li className={styles.social_menu_ul_li}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                     <a href="https://www.instagram.com/ceg_tech_forum/" target="blank" className={styles.social_menu_ul_li_a}>
                        
                           <FaInstagram 
                           id="insta" style={hover?mystyle.icon1:mystyle.icon}
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                           />
                     
                     </a>
                  </li>
                  <li className={styles.social_menu_ul_li}
                      >
                     <a href="https://www.facebook.com/techforum.ceg/" target="blank" className={styles.social_menu_ul_li_a}>
                        <FaFacebookF style={hover1?mystyle.icon1:mystyle.icon}
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        ></FaFacebookF>
                     </a>
                  </li>
                  <li className={styles.social_menu_ul_li}>
                     <a href="https://twitter.com/ceg_tech_forum/" target="blank" className={styles.social_menu_ul_li_a}>
                        <FaTwitter style={hover2?mystyle.icon1:mystyle.icon}
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        ></FaTwitter>
                     </a>
                  </li>
                  <li className={styles.social_menu_ul_li}>
                     <a href="https://www.linkedin.com/company/ceg-tech-forum/" target="blank" className={styles.social_menu_ul_li_a}>
                        <FaLinkedinIn style={hover3?mystyle.icon1:mystyle.icon}
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        ></FaLinkedinIn>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className={styles.form__container}>
            <form onSubmit={(e) => 
               handleSubmit(e)
               } className={styles.form_outline}>


            <Tabs
            data-aos="fade-down"
            data-aos-duration="1500"
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
      onSelect={(k) => {
         if (k === "home") {
            setIslogin(true);
         } else {
            setIslogin(false);
         }
      }}
    >
      <Tab eventKey="home" title="Login">
      <div className={styles.container1}>
                  <br></br>
                  <h2 style={{fontSize:"2rem",fontWeight:800,color:"white",marginLeft:"35%"}}>{
                     "Login"
                  }</h2>
            
           
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}
               data-aos="fade-left"
               data-aos-anchor="#example-anchor"
               data-aos-offset="500"
               data-aos-duration="1000"
               >
               <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
               <TextField id="input-with-sx" label={"Email"} variant="standard" 
               color="secondary"
                style={{
               width: "15rem",
               }}
               onChange={(e) => {
                  setLemail(e.target.value);
               }}
               />
               </Box>
               
               <br></br>
             
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
               >
        <Lock sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" 
        color="secondary"
        style={{
            width: "15rem",
            
        }}
         onChange={(e) => {
            setLpsswd(e.target.value);
         }}
        />
      </Box>

               <br></br>
            

               
               <center>
                  <button id={styles.btn__send}
                  // onClick={() => {
                  //    handleLogin();
                  // }}
                  >Login</button>
               </center>
               

                    
               </div>
      </Tab>
      <Tab eventKey="profile" title="SignUp">
   
      <div className={styles.container1}>
                  <br></br>
                  <h2 style={{fontSize:"2rem",fontWeight:800,color:"white",marginLeft:"30%"}}>{
                     "SignUp"
                  }</h2>
            
           
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
               <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
               <TextField id="input-with-sx" label={"Email"} variant="standard" 
               color="secondary"
                style={{
               width: "15rem",
               }}
               onChange={(e) => {
                  setSemail(e.target.value);
               }}
               />
               </Box>
               
               <br></br>
             
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Lock sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" 
        color="secondary"
        style={{
            width: "15rem",
            
        }}
         onChange={(e) => {
            setSpsswd(e.target.value);
         }}
        />
      </Box>

         
                  <br></br>
            
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
               <Lock sx={{ color: 'white', mr: 1, my: 0.5 }} />
               <TextField id="input-with-sx" label="Confirm Password" variant="standard" 
               color="secondary"
               style={{
                   width: "15rem",
                   
               }}
                  onChange={(e) => {
                     setSconfirmpsswd(e.target.value);
                  }}
               />
             </Box>
        
            

               <br></br>
            

               
               <center>
                  <button id={styles.btn__send} 
                  // onClick={() => {
                  //    handleSignup();
                  // }}
                  >{"SignUp"}</button>
               </center>
               

                    
               </div>
      </Tab>
    </Tabs>

             
            </form>
         </div>
      </div>
   );
};
export default Form;
