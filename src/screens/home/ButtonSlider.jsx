import React from 'react'

export default (props) =>(
    <React.Fragment>
        <button className="btnSlider">
            <h4 style={{fontFamily: "helvetica-w01-light", fontWeight:"200px",color:"white", letterSpacing:"0.3rem", opacity:'1'}}> T-SHIRT</h4>
            <br></br>
            <div className="apelido">
                <div className="texto"> 
                    <p style={{fontFamily:"Cookie", fontSize:"60px",fontWeight:"200"}}>Crush</p>
                </div>     
            </div>
            <button className="comprar btn">COMPRAR</button>
        </button>
    </React.Fragment>
)