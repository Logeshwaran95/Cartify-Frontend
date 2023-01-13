import { useState,useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2'
import path from '../Config/servAddr';
import axios from 'axios';

const publishableKey = "pk_test_51MC0sLSIzxR7tKXjzzP1ruys1HMpmFnJrkEVJNqLymU97jJ7FUuDtORTZKwGkcknqbQsVkZhrix3TTDwwuuYE0Lk00nxaqbEgR";

const Pay = () => {

    //redirect to payment success page
    let navigate = useNavigate();
    const redirectToSuccessPage =() => {
      navigate('/');
    };

    const [stripeToken,setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
        console.log(token);
    }

    useEffect(() => {
        const makePaymentRequest = async () => {
            try{
                let data = JSON.stringify({
                    tokenId:stripeToken.id,
                    amount:1000
                })
                const response = await axios.post(`${path}/checkout/payment`,data,
                {headers:{"Content-Type" : "application/json"}}
                );
                console.log(response.data);
                if(response.data.message === "Payment Successful"){
                    Swal.fire(
                        'Payment Successfull !',
                        'Order Placed Successfully',
                        'success'
                      ).then(()=> {
                        navigate("/home");
                      })
                }
                else{
                    Swal.fire(
                        'Payment Failed !',
                        'Order Processing Failed ! Try Again',
                        'error'
                    )
                }
            }
            catch(err){
                console.log(err.response.data);
            }
        }

        stripeToken && makePaymentRequest();

    },[stripeToken]);


    return(
        <div>
        <StripeCheckout
            name="Logesh"
            image="https://i.pinimg.com/originals/ea/91/15/ea911509a4bf5b4b0d4f814bf3be40a4.jpg"
            billingAddress
            shippingAddress
            description="Pay for the product"
            amount={1000}
            token={onToken}
            stripeKey={publishableKey}
        >
    
        <Button variant="primary"
        
        >Pay With Credit Card</Button>
    
        </StripeCheckout>
        </div>
      
    )
}

export default Pay;