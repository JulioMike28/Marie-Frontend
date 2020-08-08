import React, { Component } from 'react'
import InfoScreen from './info/InfoScreen.jsx'

export default class HomeScreen extends Component{
    render(){
        return(
            <div>
                <InfoScreen/>
                Home
            </div>
        )
    }
}