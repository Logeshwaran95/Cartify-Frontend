import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ProductCard(props) {

	const product = props.data;
	const path = `/home/product/${product._id}`


	const handleAddToWishlist = async (product) => {

		const currentUser = localStorage.getItem('currentUser');
		const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
		const checkWishlistExist =  localStorage.getItem(`CartifyWishlist_${currentUser}`);
		console.log("here is curretnuser",currentUser);
	
		
	
		if(!checkWishlistExist) {
	
		  const myobj = {
	
			userId: user.userId,
			products: {
			  productId: product._id,
			  title: product.title,
			  image: product.image,
			  rating: product.rating
			}
		  }
	
		  console.log("myobj",myobj);
	
		  try{
	
			const response = await axios.post("http://localhost:4000/wishlist/",
			myobj
			,{
			  headers: {
				Authorization: `bearer ${user.token}`
			  }
			}
			
			)
	
			
			localStorage.setItem(`CartifyWishlist_${currentUser}`, "true");
			console.log(response);
			Swal.fire({
			  title: `${product.title} Added to Wishlist`,
			  text: 'You can check your wishlist to buy later',
			  icon: 'success',
			})
	
		  }
		  catch(err){
			console.log(err);
		  }
			
	
	
	
	
		}
		else{
			try{
	
			  const myobj = {
				  userId: user.userId,
				  products:[
					{
					  productId: product._id,
					  title: product.title,
					  image: product.image,
					  rating: product.rating
					}
				  ]
			  }
				
			  const response = await axios.put(`http://localhost:4000/wishlist/${user && user.userId}`,
			  myobj
			  ,{
				headers: {
				  Authorization: `bearer ${user.token}`
				}
			  }
			  
			  )
			  Swal.fire({
				title: `${product.title} Added to Wishlist`,
				text: 'You can check your wishlist to buy later',
				icon: 'success',
			  })
				console.log(response);
	
			}
			catch(err){
				console.log("it is error",err);
				Swal.fire({
				  title: 'Error',
				  text: err.response.data,
				  icon: 'error',
				})
				
			}
		}

	}

	const handleAddToCart = async (product) => {

		const quantity = 1;
		const currentUser = localStorage.getItem('currentUser');
		const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
		const checkCartExist =  localStorage.getItem(`CartifyCart_${currentUser}`);
		console.log("here is token",user.token);
	
		console.log("here is product",product);
		
	
		if(!checkCartExist) {
	
		  const myobj = {
	
			userId: user.userId,
			products: {
			  productId: product._id,
			  title: product.title,
			  image: product.image,
			  quantity: quantity,
			  price: product.currentPrice,
			  total: product.currentPrice * quantity
			}
		  }
	
		  console.log("myobj",myobj);
	
		  try{
	
			const response = await axios.post("http://localhost:4000/cart/",
			myobj
			,{
			  headers: {
				Authorization: `bearer ${user.token}`
			  }
			}
			
			)
	
			
			localStorage.setItem(`CartifyCart_${currentUser}`, "true");
			console.log(response);
			Swal.fire({
			  title: `${product.title} Added to cart`,
			  text: 'You can check your cart to proceed to checkout',
			  icon: 'success',
			})
	
		  }
		  catch(err){
			console.log(err);
		  }
			
	
	
	
	
		}
		else{
			try{
	
			  const myobj = {
				  userId: user.userId,
				  products:[
					{
					  productId: product._id,
					  title: product.title,
					  image: product.image,
					  quantity: quantity,
					  price: product.currentPrice,
					  total: product.currentPrice * quantity
					}
				  ]
			  }
				
			  const response = await axios.put(`http://localhost:4000/cart/${user.userId}`,
			  myobj
			  ,{
				headers: {
				  Authorization: `bearer ${user.token}`
				}
			  }
			  
			  )
			  Swal.fire({
				title: `${product.title} Added to cart`,
				text: 'You can check your cart to proceed to checkout',
				icon: 'success',
			  })
				console.log(response);
	
			}
			catch(err){
				console.log("it is error",err);
				Swal.fire({
				  title: 'Error',
				  text: err.response.data,
				  icon: 'error',
				})
				
			}
		}
	
	  }


  return (
	<>


		{product && 

    	<div class="product-card">
		<div class="badge">Hot</div>
		<Link to="/home/product/" 
		state={{product: product}}
		>
		<div class="product-tumb">
			<img src={product.image} alt=""/>
		</div>
		</Link>
		<div class="product-details">
			<span class="product-catagory">{
			<div>
				{product.categories[0]}
				&emsp;
				{product.categories[1]} 
			</div>
		
			}</span>
			<p
			className='product-title'
			>
			{product.title}</p>
			<p 
			className='product-description'
			>{product.shortDescription}</p>
			
			<div class="product-bottom-details">
				<div class="product-price"><small>${product.originalPrice}</small>${product.currentPrice}</div>
				<div class="product-links">
					<a 
					onClick={() => handleAddToWishlist(product)}
					><i class="fa fa-heart"></i></a>
					<a

					onClick={() => handleAddToCart(product)}


					><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

	}


	</>
  )
}
