import React from 'react'

export default (props) =>(
    <React.Fragment>
        <button style={{background: `${props.background}`, border: `1px solid ${props.sombra}`,boxShadow:`2px 6px ${props.sombra}`}} className="btnSlider">
            <h4 style={{fontFamily: "helvetica-w01-light", fontWeight:"200px",color:"white", letterSpacing:"0.3rem", opacity:'1'}}> {props.category}</h4>
            <br></br>
            <div style={{background:`${props.sombra}`}} className="apelido">
                <div style={{position: "absolute",right: `${props.right}`, top: `${props.top}`}}> 
                    <p style={{fontFamily:"Cookie", fontSize:`${props.font}`}}>{props.apelido}</p>
                </div>     
            </div>
            <button type="button" className="comprar btn">COMPRAR</button>
        </button>
    </React.Fragment>
)