import React from 'react'
import "./HomeScreen.css"

import CarouselComp from '../../Components/Carousel/Carousel';
import ProductScreen from '../ProductScreen/ProductScreen';
import CorouselCenter from '../../Components/CarouselCenter/CarouselCenter';
import axios from 'axios';


export default function HomeScreen() {

    const [products, setProducts] = React.useState([]);

    const getProducts = async () => {
        try{
            const response = await axios.get("http://localhost:4000/product");
            setProducts(response.data);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    React.useEffect(()=>{
        
        getProducts();

    },[])

  return (
    <div>
         <h2
        className='titleText'
        >Now On the Air</h2>

        <CarouselComp/>

        <h2
        className='titleText'
        >Prime Deals</h2>

            <ProductScreen 
            data={products}
            />        


        <h2
        className='titleText'
        >Trending</h2>

        <ProductScreen
        data={products}
        />

        <h2
        className='titleText'
        >Offers</h2>

        <CorouselCenter />
        
    </div>
  )
}
