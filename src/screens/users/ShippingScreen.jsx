import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';
import icon from '../../imagens/favicon.ico'

function ShippingScreen(props) {

  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ cidade,endereco,cep,telefone }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="content">      
        <div id="login">
            <form onSubmit={submitHandler}> 
                <h4>Endereço p/ Entrega <img src={icon} alt="icon"></img></h4>
                <p> 
                    <label htmlFor="cidade_login">Sua Cidade:</label>
                    <input id="cidade_login" required="required" type="text" placeholder="ex. Carnauba dos Dantas" name="cidade" className="login-input" onChange={(e)=> setCidade(e.target.value)}/>
                </p>
                <p> 
                    <label htmlFor="endereco_login">Seu Endereco:</label>
                    <input id="endereco_login" required="required" type="text" placeholder="ex. Rua Tonheca Dantas" name="end" className="login-input" onChange={(e)=> setEndereco(e.target.value)}/>
                </p>
                <p> 
                    <label htmlFor="cep_login">Seu CEP</label>
                    <input id="cep_login" required="required" type="text" placeholder="ex. 59374000" name="text" className="login-input" onChange={(e)=> setCep(e.target.value)}/> 
                </p>
                <p> 
                    <label htmlFor="phone_login">Seu Telefone</label>
                    <input id="phone_login" required="required" type="tel" placeholder="ex. 988881111" name="tel" className="login-input" onChange={(e)=> setTelefone(e.target.value)}/> 
                </p>
                <p> 
                    <input type="submit" className="btnContinue" value="Continue" /> 
                </p>
            </form>
        </div>
    </div>
  </div>
}
export default ShippingScreen;