import React from 'react';
import './App.css';
import {Switch,Route, BrowserRouter} from 'react-router-dom';

//Telas
import HeaderScreen from './screens/template/HeaderScreen.jsx'
import NavbarScreen from './screens/template/NavbarScreen.jsx'
import FooterScreen from './screens/template/FooterScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import DefaultScreen from './screens/template/DefaultScreen.jsx'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <HeaderScreen />
          <NavbarScreen />

          <Switch>
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route component={DefaultScreen} />
          </Switch>
          
          <FooterScreen />
        </BrowserRouter>
    </div>
  );
}

export default App;
