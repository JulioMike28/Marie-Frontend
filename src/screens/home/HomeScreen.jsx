import React, { Component } from 'react'

import InfoScreen from '../info/InfoScreen.jsx'
import SliderScreen from './SliderScreen.jsx'
import NovidadeScreen from './NovidadeScreen.jsx'
import PromoScreen from './PromoScreen.jsx'
import insta from '../../imagens/instagram.png'

export default class HomeScreen extends Component{
    render(){
        return(
            <div>
                <InfoScreen/>
                <br></br>
                <SliderScreen />
                <NovidadeScreen/>
                <PromoScreen />
                <center><h5 style={{letterSpacing:"0.4rem", color:"purple"}}><img src={insta} alt="instagram"/> SIGA NOSSO INSTAGRAM <a href="https://www.instagram.com/modamarie_/?hl=pt-br">@modamarie_</a></h5></center>
            </div>
        )
    }
}