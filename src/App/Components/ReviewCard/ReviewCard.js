import React from 'react'
import "./ReviewCard.css"

export default function ReviewCard() {
  return (

   
        <div class="testimonial-box">
          
          <div class="box-top">
             
            
              <div class="profile">
               
                
                  <div class="profile-img">
                      <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                  </div>
                
                  <div class="name-user">
                      <strong>Liam mendes</strong>
                      <span>@liammendes</span>
                  </div>
              </div>
           
              <div class="reviews">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
              </div>
          </div>
   
          <div class="client-comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
          </div>
      </div>
  )
}
