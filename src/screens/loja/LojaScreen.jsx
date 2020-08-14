import React from 'react'
import icon from '../../imagens/favicon.ico'
import FiltroScreen from './FiltroScreen'
import RoupasScreen from './RoupasScreen'

export default (props) =>(
    <React.Fragment>
        <br></br>
            <center><h4 style={{color:"purple"}}>Loja <img src={icon} alt="icon" /></h4></center>
        <br></br>
        <div className="row">
            <div className="col-md-2 filtro">
                <FiltroScreen/>
            </div>
            <div className="col-md roupas">
                <RoupasScreen/>
            </div>
        </div>
    </React.Fragment>
)