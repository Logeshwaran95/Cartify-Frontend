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

    const getProducts = async () => {
        try{
            setLoading(true);
            const response = await axios.get(`${path.local}/product`);
            setProducts(response.data);
            console.log(response.data);
            setLoading(false);
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

            <Loader loading={loading} />

            <ProductScreen 
            data={products}
            />        


        <h2
        className='titleText'
        >Trending</h2>

           
        <Loader loading={loading} />


        <ProductScreen
        data={products}
        />

        <h2
        className='titleText'
        >Offers</h2>



        <CorouselCenter
        data={products}
        />
        
    </div>
  )
}
