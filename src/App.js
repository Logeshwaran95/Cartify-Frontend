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
import ReviewsScreen from './App/Screens/ReviewsScreen/ReviewsScreen';


import colors from './App/Config/colors';
import { Button, Nav } from 'react-bootstrap';
import Swal from 'sweetalert2';
import OrdersScreen from './App/Screens/OrdersScreen/OrdersScreen';
import FavouritesScreen from './App/Screens/FavouritesScreen/FavouritesScreen';
import HomeScreen from './App/Screens/HomeScreen/HomeScreen';
import SearchResultScreen from './App/Screens/SearchResultScreen/SearchResultScreen';
import FilterScreen from './App/Screens/FilterScreen/FilterScreen';
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
        <HomeScreen/>
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

  const ReviewsScreenContainer = () => {
    return (
      <div>
        <Navbar/>
        <ReviewsScreen/>
        <Footer/>
      </div>
    )
  }

  const SearchResultScreenContainer = () => {
    return (
      <div>
        <Navbar/>
        <SearchResultScreen/>
        <Footer/>
      </div>
    )
  }

  const FilterScreenContainer = () => {
    return (
      <div>
        <Navbar/>
        <FilterScreen/>
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

        <Route path="/" element={<AuthScreen />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/home/product" element={<ProductDetailsContainer />} />
        <Route path="/home/cart" element={<CartScreenContainer />} />
        <Route path="/home/seller" element={<SellerScreenContainer/>} />
        <Route path="/home/checkout" element={<CheckoutScreenContainer/>} />
        <Route path="/home/account" element={<AccountScreenContainer/>} />
        <Route path="/home/orders" element={<OrdersScreenContainer/>} />
        <Route path="/home/wishlist" element={<FavouritesScreenContainer/>} />
        <Route path="/home/product/id/reviews" element={<ReviewsScreenContainer/>} />
        <Route path="/home/product/search/:searchQuery" element={<SearchResultScreenContainer/>}  />
        <Route path="/home/product/filter" element={<FilterScreenContainer />} />
      </Routes>


    </Router>
    </div>
  );
}

export default App;
