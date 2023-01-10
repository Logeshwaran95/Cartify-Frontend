import React from 'react'
import "./FavouritesScreen.css"

export default function FavouritesScreen() {

    const items = ['item1','item2','item3','item4','item5'];

  return (
    <div>

         
 <div class="wish_testimonial-box-container">

        {items.map((item) => 

<div class="wish_testimonial-box">
       
<div class="wish_box-top">
   
  
    <div class="wish_profile">
     
      
        <div class="wish_profile-img">
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
        </div>
      
        <div class="wish_name-user">
            <strong>Play Station 5</strong>
            <span>Sony</span>
        </div>
    </div>
 
    <div class="wish_reviews">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div>
</div>

{/* <div class="wish_client-comment">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
</div> */}
</div>
        
        )}

</div>
      
    </div>
  )
}
