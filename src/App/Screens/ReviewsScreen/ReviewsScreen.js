import React from 'react'
import "./ReviewsScreen.css"
import ReviewCard from '../../Components/ReviewCard/ReviewCard';

export default function ReviewsScreen() {

    const items = ['item1','item2','item3','item4','item5','item6'];

  return (
    <div>
        <section id="testimonials">
 
  
 <div class="testimonial-box-container">
   
   
   {items.map((item) => 

     <ReviewCard/>

)}



 
   
   
  
     </div>
</section>

    </div>
  )
}
