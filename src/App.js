import React from 'react';
import './App.css';
import {Switch,Route, BrowserRouter} from 'react-router-dom';

//Telas
import HeaderScreen from './screens/template/HeaderScreen.jsx'
import NavbarScreen from './screens/template/NavbarScreen.jsx'
import FooterScreen from './screens/template/FooterScreen.jsx'
import HomeScreen from './screens/home/HomeScreen.jsx'
import DefaultScreen from './screens/template/DefaultScreen.jsx'
import MedidaScreen from './screens/info/MedidaScreen.jsx'
import ContatoScreen from './screens/info/ContatoScreen.jsx'
import PoliticaScreen from './screens/politica/PoliticaScreen.jsx'
import LojaScreen from './screens/loja/LojaScreen.jsx';
import DetailsScreen from './screens/details/DetailsScreen.jsx';

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
            <Route path="/politica" component={PoliticaScreen}/>
            <Route path="/loja" component={LojaScreen}/>
            <Route path="/product/:id" component={DetailsScreen} />
            <Route component={DefaultScreen} />
          </Switch>
          
          <FooterScreen />
        </BrowserRouter>
    </div>
  );
}

export default App;
