import React, { Component } from 'react'

import InfoScreen from '../info/InfoScreen.jsx'
import SliderScreen from './SliderScreen.jsx'

export default class HomeScreen extends Component{
    render(){
        return(
            <div>
                <InfoScreen/>
                <br></br>
                <SliderScreen />
            </div>
        )
    }
}