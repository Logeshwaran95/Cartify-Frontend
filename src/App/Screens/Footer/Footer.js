import React from 'react'
import Swal from 'sweetalert2'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic"
        //  data-aos="fade-right"
         >About us</div>
         <p
        //  data-aos="fade-left"
         >
            Cartify is an e-commerce website 
         </p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a><i class="fas fa-phone-volume"></i>1234567890</a>
         </div>
         <div class="email">
           <a><i class="fas fa-envelope"></i>Cartify@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <ul 
       style={{
          listStyleType: 'none',
       }}
       >
          <li><a>Delivery</a></li>
          <li><a>Return</a></li>
          <li><a>Payment</a></li>
          <li><a>Cancellation</a></li>
       </ul>
     </div>
     <div class="right box">
       <div class="topic">Newsletter</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Subscribe"
         onClick={(e) => {
            e.preventDefault()
            Swal.fire({
                title: 'Yahoo !',
                text: 'Subscribed to Newsletter',
                icon: 'success',

            })
         }}
         />
         <div class="media-icons">

         <a href="https://github.com/Logeshwaran95"
          target={"_blank"}
         ><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/logeshwaran-/"
          target={"_blank"}
          ><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/logeshsiva95/"
          target={"_blank"}
          ><i class="fab fa-instagram"></i></a>
           <a href="https://www.youtube.com/@operationgaming95"
          target={"_blank"}
           ><i class="fab fa-youtube"></i></a>
          <a href="https://twitter.com/Logeshwaran395"
          target={"_blank"}
          ><i class="fab fa-twitter"></i></a>
           {/* <a href="#"><i class="fab fa-youtube"></i></a> */}
          
         </div>
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2023 <a href="#">Cartify </a> All rights reserved</p>
   </div>
 </footer>
    </div>
  )
}
