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
import colors from './App/Config/colors';


const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${colors.primary};
  }
`;

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    AOS.refresh();
    // window.addEventListener("resize", handleResize)
    
  }, [])

  const Home = () => {
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

  const ProductDetails = () => {
    return (
      <div>
        <Navbar />
        <ProductDetailsScreen />
        <Footer />
      </div>
    )
  }

  return (
    <div>
      
    <Router>
    <GlobalStyle />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/product/id" element={<ProductDetails />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/payment" element={<Pay />} />
        <Route path="/payment/success" element={<Success />} />
      </Routes>


    </Router>
    </div>
  );
}

export default App;
