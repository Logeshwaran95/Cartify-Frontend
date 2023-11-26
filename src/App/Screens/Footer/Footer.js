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
            Cartify is an E-commerce website which is developed for the purpose of learning and to showcase my skills. This website is developed using MERN stack.
         </p>
       </div>
       <div class="lower">
         <div class="topic">Contact Developer</div>
         <div class="phone">
           <a><i class="fas fa-phone-volume"></i>9361460508</a>
         </div>
         <div class="email">
           <a><i class="fas fa-envelope"></i>rejeban1020816@gmail.com</a>
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
         <input type="text" placeholder="Enter email address" style={{
          color: 'black',
         }}/>
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
     <p>
     Made with &nbsp;
        <i class="fas fa-heart"></i> 
        &nbsp;
        by Rejeban
      </p>
   </div>
 </footer>
    </div>
  )
}
