import React from 'react'
import "./ReviewsScreen.css"
import ReviewCard from '../../Components/ReviewCard/ReviewCard';
import { useLocation } from 'react-router-dom';

export default function ReviewsScreen() {

    const location = useLocation();
    console.log(location);
    const review  = location.state.review;
    console.log(review);

  return (
    <div>
      <h2
      style={{
        textAlign: "center",
        margin:"1rem",
        color: "white",
        fontWeight: "bold",
        letterSpacing: "1px",

      }}
      >Reviews</h2>

        <section id="testimonials">
 
  
 <div class="testimonial-box-container">
   
   
   {review.map((item) => 

     <ReviewCard
        data={item}
     />

)}



 
   
   
  
     </div>
</section>

    </div>
  )
}
