import React from 'react'
import { Link } from 'react-router-dom';
import "./FavouritesScreen.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

import path from '../../Config/servAddr';
import Loader from '../../Components/Loader';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../Components/ScrollToTop';



export default function FavouritesScreen() {

    const navigate = useNavigate();


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
    setLoading(true);
        try{

         
            const response = await axios.get(`${path.local}/wishlist/find/${user && user.userId}`,{
                headers: {
                    Authorization: `bearer ${user.token}`
                }
            });
            console.log(response.data[0].products);
            setWishLists(response.data[0].products);
            
        }
        catch(err){
            console.log(err.response.data);
            setWishLists([]);
        }
        setLoading(false);
    }

    React.useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    const data = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    setUser(data);
        getWishLists();
    },[])


    const handleClick = async (productId) => {
      
      try{
        const response = await axios.get(`${path.local}/product/find/${productId}`);
        console.log(response.data);
        navigate('/home/product',{
          state: {
            product: response.data
          }
        })
        
      }
      catch(err){
        console.log(err.response.data);
        Swal.fire({
          title: 'Error',
          text: err.response.data,
          icon: 'error',
          
        })
      }
    }


  return (
    <div>

      <ScrollToTop/>

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


<div
onClick={() => {
  handleClick(product.productId);
}}
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
            {/* <span>
                {product.rating}
            </span> */}
        </div>

    </div>
 
    {/* <div class="wish_reviews">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div> */}


    </div>

</div>



{/* <div class="wish_client-comment">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
</div> */}

<center>

<Button variant="primary" className="wish_btn"
onClick={() => {
    removeWishList(product.productId);
}}
>Remove</Button>

</center>
</div>
        
        )}

</div>


      
    </div>
  )
}
