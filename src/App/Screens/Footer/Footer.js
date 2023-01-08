import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic"
         data-aos="fade-right"
         >About us</div>
         <p
         data-aos="fade-left"
         >
            Cartify is an e-commerce website 
         </p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i>Cartify@gmail.com</a>
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
          <li><a href="#">Delivery</a></li>
          <li><a href="#">Return</a></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Cancellation</a></li>
       </ul>
     </div>
     <div class="right box">
       <div class="topic">Newsletter</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Subscribe"/>
         <div class="media-icons">
           <a href="#"><i class="fab fa-facebook-f"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
           <a href="#"><i class="fab fa-youtube"></i></a>
           <a href="#"><i class="fab fa-linkedin-in"></i></a>
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
