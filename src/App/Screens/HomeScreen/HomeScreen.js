import React from 'react'
import "./HomeScreen.css"

import CarouselComp from '../../Components/Carousel/Carousel';
import ProductScreen from '../ProductScreen/ProductScreen';
import CorouselCenter from '../../Components/CarouselCenter/CarouselCenter';
import axios from 'axios';
import path from '../../Config/servAddr';
import { Spinner } from 'react-bootstrap';
import Loader from '../../Components/Loader';


export default function HomeScreen() {

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const [toprated, setToprated] = React.useState([]);
    const [trending, setTrending] = React.useState([]);
    const [mostReviewed, setMostReviewed] = React.useState([]);
    const [mobiles, setMobiles] = React.useState([]);
    const [laptops, setLaptops] = React.useState([]);
    const [tv, setTv] = React.useState([]);

    const getProducts = async () => {
        try{
            setLoading(true);
            const response = await axios.get(`${path.local}/product`);
            setProducts(response.data);
            // console.log(response.data);
            setLoading(false);

            setLaptops(response.data.filter((item)=>item.categories.toString().toLowerCase().includes("laptops")));
            setMobiles(response.data.filter((item)=>item.categories.toString().toLowerCase().includes("mobiles")));
            setTv(response.data.filter((item)=>item.categories.toString().toLowerCase().includes("tv")));


            console.log("here are laptops",laptops);

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
         {/* <h2
        className='titleText'
        >
        Trending
        </h2> */}

        <CarouselComp/>





        <h2
        className='titleText'
        >Top Rated</h2>

            <Loader loading={loading} />

            <ProductScreen 
            data={products}
            />        



        <h2
        className='titleText'
        >Laptops</h2>

           
        <Loader loading={loading} />


        <ProductScreen
        data={laptops}
        />

        <h2
        className='titleText'
        >Mobiles</h2>

           
        <Loader loading={loading} />


        <ProductScreen
        data={mobiles}
        />

        <h2
        className='titleText'
        >TV</h2>

        <Loader loading={loading} />

        <ProductScreen
        data={tv}
        />



        <h2
        className='titleText'
        >Offers</h2>



        <CorouselCenter
        data={laptops}
        />
        
    </div>
  )
}
