import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import "./SearchResultScreen.css"
import { useParams } from 'react-router-dom';

import path from '../../Config/servAddr';
import Loader from '../../Components/Loader';


export default function SearchResultsScreen(props) {

    const { searchQuery } = useParams();
    console.log(searchQuery);


    const [user, setUser] = React.useState({});

    const [search, setSearch] = React.useState([]);

    const [loading, setLoading] = React.useState(false);



    const getSearchLists = async () => {

    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));

        try{

            setLoading(true);
            const response = await axios.get(`${path.local}/product/search/${searchQuery && searchQuery}`,{
                headers: {
                    Authorization: `bearer ${user.token}`
                }
            });
            console.log(response.data);
            setSearch(response.data);
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
        getSearchLists();
    },[searchQuery])

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
        >
            Search Results for : &nbsp;
            {
            searchQuery && searchQuery
        }</h2>

        <Loader loading={loading} />


         
 <div class="search_testimonial-box-container">

 {
        search.length === 0 && !loading &&
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
          >
            No Products Found
          </h3>
          <Link to='/home'>
          <Button variant="primary" style={{
            marginTop: '1rem'
          }}>Go to Home</Button>
          </Link>
        </div>

      }

        {
        search && 
        search.map((product) => 
        

       
<div class="search_testimonial-box">
{/* <Link to="/home/product/id"> */}

<Link to="/home/product/" 
		state={{product: product}}
		>
<div class="search_box-top">
    
   
  
    <div class="search_profile">
        
     
      
        <div class="search_profile-img">
            <img src={
                product.image
            }/>
        </div>
      
        <div class="search_name-user">
            <strong>
                {product.title}
            </strong>
            <span>
                {product.rating}
            </span>
        </div>
    </div>
 
    <div class="search_reviews">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div>
</div>
{/* </Link> */}

<div class="wish_client-comment">
    <p>
        {product.shortDescription}
    </p>
</div>
{/* <Button variant="danger" className="wish_btn"

>Remove</Button> */}
</Link>
</div>

        
        )}



</div>




      
    </div>
  )
}
