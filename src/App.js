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

        <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginTop:"20px",
          flexWrap:"wrap"

        }}>
        
        <button onClick={() => {
          setTheme(colors.primary);
          localStorage.setItem('CartifyTheme', colors.primary);
        }}
        class="toggler" style={{background:colors.primary}}></button>
        <button onClick={() => {
          setTheme("linear-gradient(to right, #f2709c, #ff9472)");
          localStorage.setItem('CartifyTheme', 'linear-gradient(to right, #f2709c, #ff9472)');
        }} class="toggler" style={{background:"linear-gradient(to right, #f2709c, #ff9472)"}}></button>
        <button onClick={() => {
          setTheme("linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)");
          localStorage.setItem('CartifyTheme', 'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BD2FF 90%)');
        }} class="toggler" style={{background:"linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)"}}></button>
        <button onClick={() => {
          setTheme("linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)");
          localStorage.setItem('CartifyTheme', 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)');
        }} class="toggler" style={{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"}}></button>
        <button onClick={() => {
          setTheme("linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )");
          localStorage.setItem('CartifyTheme', 'linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )');
        }} class="toggler" style={{background:"linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )"}}></button>
        </div>

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
        <AccountScreen/>
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
      </Routes>


    </Router>
    </div>
  );
}

export default App;
