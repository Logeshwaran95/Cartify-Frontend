import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard() {
  return (
    <Link to="/product/id">
    	<div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src="https://i.gadgets360cdn.com/products/large/asus-rog-strix-g15-1200x800-1615983324.jpg?downsize=*:360" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

   
    </Link>
  )
}
