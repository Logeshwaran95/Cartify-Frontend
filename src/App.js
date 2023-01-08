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

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
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

  const Welcome = () => {
    return (
      <div>
        <Navbar />
     
        <h1 style={{marginTop:"5rem"}}>Welcome </h1>
        <h1>hey</h1>
        
        <Footer />
      </div>
    )
  }

  return (
    <div>
      
    <Router>
    <GlobalStyle />

      <Routes>
        
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/payment" element={<Pay />} />
        <Route path="/payment/success" element={<Success />} />
      </Routes>


    </Router>
    </div>
  );
}

export default App;
