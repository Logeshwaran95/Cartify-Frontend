import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import * as React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from '../src/App/Screens/Payment';
import Success from '../src/App/Screens/Success';
import AuthScreen from './App/Screens/Login/AuthScreen';
import Footer from './App/Screens/Footer/Footer';
import Navbar from './App/Screens/Navbar/Navbar';
import { createGlobalStyle } from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ProductScreen from './App/Screens/ProductScreen/ProductScreen';
import CorouselCenter from './App/Components/CarouselCenter/CarouselCenter';
import CarouselComp from './App/Components/Carousel/Carousel';
import ProductDetailsScreen from './App/Screens/ProductDetailsScreen/ProductDetailsScreen';
import CartScreen from "./App/Screens/CartScreen/CartScreen";
import AccountScreen from "./App/Screens/AccountScreen/AccountScreen";
import CheckoutScreen from './App/Screens/CheckoutScreen/CheckoutScreen';
import SellerScreen from './App/Screens/SellerScreen/SellerScreen';


import colors from './App/Config/colors';
import { Button, Nav } from 'react-bootstrap';
import Swal from 'sweetalert2';
import OrdersScreen from './App/Screens/OrdersScreen/OrdersScreen';
import FavouritesScreen from './App/Screens/FavouritesScreen/FavouritesScreen';
// const GlobalStyle = createGlobalStyle`
//   body {
//     background-image: ${colors.primary};
//   }
// `;


function App() {

  const [theme, setTheme] = React.useState(colors.primary);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    AOS.refresh();

    if(localStorage.getItem('CartifyTheme') === null){
        setTheme(colors.primary);
    }
    else{
        setTheme(localStorage.getItem('CartifyTheme'));
    }
    // window.addEventListener("resize", handleResize)
    
  }, [])

  const HomeContainer = () => {
    return (
      <div>
        <Navbar />

       

        <h2
        className='titleText'
        >Now On the Air</h2>

        <CarouselComp/>

        <h2
        className='titleText'
        >Prime Deals</h2>

        <ProductScreen/>

        <h2
        className='titleText'
        >Trending</h2>

        <ProductScreen/>

        <h2
        className='titleText'
        >Offers</h2>

        <CorouselCenter />
        
        <Footer />
      </div>
    )
  }

  const ProductDetailsContainer = () => {
    return (
      <div>
        <Navbar />
        <ProductDetailsScreen />
        <Footer />
      </div>
    )
  }

  const CartScreenContainer = () => {
    return (
      <div>
        <Navbar/>
        <CartScreen/>
        <Footer/>
      </div>
    )
  }

  const CheckoutScreenContainer = () => {
    return (
      <div>
        <Navbar/>
        <CheckoutScreen/>
        <Footer/>
      </div>
    )
  }

  const AccountScreenContainer = () => {
    return (
      <div>
        <Navbar/>

        <AccountScreen
          setTheme={setTheme}
        />
        
        <Footer/>
      </div>
    )
  }

  const SellerScreenContainer = () => {
    return (
      <div>
        <Navbar />
        <SellerScreen />
        <Footer />
      </div>
    )
  }

  const OrdersScreenContainer = () => {
    return (
       <div>
            <Navbar/>
            <OrdersScreen/>
            <Footer/>
       </div>   
    )
  }

  const FavouritesScreenContainer = () => {
    return (
      <div>
        <Navbar/>
        <FavouritesScreen/>
        <Footer/>
      </div>
    )
  }

  return (
    <div style={{
      background: theme
    }}>
      
    <Router>
    {/* <GlobalStyle /> */}

      <Routes>

        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/" element={<HomeContainer />} />
        <Route path="/product/id" element={<ProductDetailsContainer />} />
        <Route path="/cart" element={<CartScreenContainer />} />
        <Route path="/seller" element={<SellerScreenContainer/>} />
        <Route path="/checkout" element={<CheckoutScreenContainer/>} />
        <Route path="/account" element={<AccountScreenContainer/>} />
        <Route path="/orders" element={<OrdersScreenContainer/>} />
        <Route path="/wishlist" element={<FavouritesScreenContainer/>} />
      </Routes>


    </Router>
    </div>
  );
}

export default App;
