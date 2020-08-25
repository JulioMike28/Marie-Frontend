import React from 'react';
import './App.css';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';

//Telas
import HeaderScreen from './screens/template/HeaderScreen.jsx'
import NavbarScreen from './screens/template/NavbarScreen.jsx'
import FooterScreen from './screens/template/FooterScreen.jsx'
import HomeScreen from './screens/home/HomeScreen.jsx'
import DefaultScreen from './screens/template/DefaultScreen.jsx'
import MedidaScreen from './screens/info/MedidaScreen.jsx'
import ContatoScreen from './screens/info/ContatoScreen.jsx'
//import PoliticaScreen from './screens/politica/PoliticaScreen.jsx'
import LojaScreen from './screens/loja/LojaScreen.jsx';
import DetailsScreen from './screens/details/DetailsScreen.jsx';
import CartScreen from './screens/cart/CartScreen';
import LoginScreen from './screens/users/LoginScreen';
import RegisterScreen from './screens/users/RegisterScreen';
import GerenciaScreen from './screens/gerencia/GerenciaScreen';
import ShippingScreen from './screens/users/ShippingScreen';
import PaymentScreen from './screens/pagamento/PaymentScreen';
import PlaceOrderScreen from './screens/pagamento/PlaceOlderScreen';

function App() {

  return (
  
    <div className="App">
        <BrowserRouter>
          <HeaderScreen />
          <NavbarScreen />
          <Switch>
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route path="/medida" component={MedidaScreen}/>
            <Route path="/contato" component={ContatoScreen}/>
            <Route path="/productCreate" component={GerenciaScreen}/>
            <Route path="/loja" component={LojaScreen}/>
            <Route path="/signin" component={LoginScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/shipping" component={ShippingScreen}/>
            <Route path="/payment" component={PaymentScreen}/>
            <Route path="/placeorder" component={PlaceOrderScreen}/>
            <Route path="/productCreate" component={GerenciaScreen}/>
            <Route path="/product/:id" component={DetailsScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route component={DefaultScreen} />
          </Switch>
          
          <FooterScreen />
        </BrowserRouter>
    </div>
  );
}

export default App;
