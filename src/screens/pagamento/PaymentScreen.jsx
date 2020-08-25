import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';
import icon from '../../imagens/favicon.ico'

function PaymentScreen(props) {

  const [paymentMethod, setPaymentMethod] = useState('');
  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  }
  return <div>
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className="content">      
        <div id="login">
            <form onSubmit={submitHandler}> 
                <h4>Forma de Pagamento <img src={icon} alt="icon"></img></h4>
                <p>  
                    <input id="payment" required="required" type="radio" name="payment" id="payment" value="paypal" onChange={(e)=> setPaymentMethod(e.target.value)}/>
                    <label htmlFor="payment">Paypal</label>
                </p>
                <p> 
                    <input type="submit" className="btnContinue" value="Continue" /> 
                </p>
            </form>
        </div>
    </div>
  </div>
}
export default PaymentScreen;