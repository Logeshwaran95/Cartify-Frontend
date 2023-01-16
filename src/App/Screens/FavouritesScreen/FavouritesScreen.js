import React from 'react'
import { Link } from 'react-router-dom';
import "./FavouritesScreen.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

import path from '../../Config/servAddr';
import Loader from '../../Components/Loader';



export default function FavouritesScreen() {


    const [user, setUser] = React.useState({});

    const [wishlists, setWishLists] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    const removeWishList = async (productId) => {

        try{

            console.log("user id-->",user.userId,"usertoken --->",user.token);
      
      const response = await axios.delete(`${path.local}/wishlist`,
       
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

            setLoading(true);
            const response = await axios.get(`${path.local}/wishlist/find/${user && user.userId}`,{
                headers: {
                    Authorization: `bearer ${user.token}`
                }
            });
            console.log(response.data[0].products);
            setWishLists(response.data[0].products);
            setLoading(false);
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

        <Loader loading={loading} />



         
 <div class="wish_testimonial-box-container">

 {
        wishlists.length === 0 && !loading &&
        <div
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}
        >
          <h3
          >Your Wishlist is Empty</h3>
          <Link to='/home'>
          <Button variant="primary" style={{
            marginTop: '1rem'
          }}>Go to Home</Button>
          </Link>
        </div>

      }

        {
        wishlists && 
        wishlists.map((product) => 
        

<div class="wish_testimonial-box">
{/* <Link to="/home/product/id"> */}
<div class="wish_box-top">
    
   
<Link to="/home/product/" 
		state={{productid: product._id}}
		>

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

    </Link>

</div>



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
