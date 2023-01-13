import React from 'react'
import { Link } from 'react-router-dom';
import "./FavouritesScreen.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';



export default function FavouritesScreen() {


    const [user, setUser] = React.useState({});

    const [wishlists, setWishLists] = React.useState([]);

    const removeWishList = async (productId) => {
        try{
            console.log("user id-->",user.userId,"usertoken --->",user.token);
      
      const response = await axios.delete(`http://localhost:4000/wishlist`,
       
        {
          headers: {
            Authorization: `bearer ${user.token}`
          },
          data: {
            productId: productId,
            userId: user.userId
          }
        }

        
      )

      console.log(response.data);
      Swal.fire({
        title: 'Success',
        text: response.data,
        icon: 'success',
      })

      getWishLists();
        }
        catch(err){
            console.log(err.response.data);
        }
    }

    const getWishLists = async () => {

    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));

        try{
            const response = await axios.get(`http://localhost:4000/wishlist/find/${user && user.userId}`,{
                headers: {
                    Authorization: `bearer ${user.token}`
                }
            });
            console.log(response.data[0].products);
            setWishLists(response.data[0].products);
        }
        catch(err){
            console.log(err.response.data);
        }
    }

    React.useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    const data = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    setUser(data);
        getWishLists();
    },[])

  return (
    <div>

        <h2
        style={{
            textAlign: "center",
            color: "white",
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "800",
            letterSpacing: "1px",
        }}
        >Your Wishlist</h2>



         
 <div class="wish_testimonial-box-container">

        {
        wishlists &&
        wishlists.map((product) => 
        

<div class="wish_testimonial-box">
<Link to="/home/product/id">
<div class="wish_box-top">
    
   
  
    <div class="wish_profile">
        
     
      
        <div class="wish_profile-img">
            <img src={
                product.image
            }/>
        </div>
      
        <div class="wish_name-user">
            <strong>
                {product.title}
            </strong>
            <span>
                {product.rating}
            </span>
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
</Link>

{/* <div class="wish_client-comment">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
</div> */}
<Button variant="danger" className="wish_btn"
onClick={() => {
    removeWishList(product.productId);
}}
>Remove</Button>
</div>
        
        )}

</div>


      
    </div>
  )
}
