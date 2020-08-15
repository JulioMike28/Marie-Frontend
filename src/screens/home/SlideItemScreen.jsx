import React from 'react'
import ButtonSlider from './ButtonSlider'


export default (props) => (
    <React.Fragment>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={props.image1} alt="First slide" />
                    <ButtonSlider
                        background="#afeeee"
                        sombra="#c8a2c8"
                        apelido="Miga sua Louca"
                        category="T-SHIRT"
                        right="50px"
                        top="100px"
                        font="40px"
                        fundo="#deb887"
                    />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.image2} alt="Second slide" />
                    <ButtonSlider
                        background="#FFA07A"
                        sombra="#E0FFFF"
                        apelido="Crush"
                        category="MACAQUINHO"
                        right="90px"
                        top="90px"
                        font="60px"
                    />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.image3} alt="Third slide"/>
                    <ButtonSlider
                        background="#98FB98"
                        sombra="#DAA520"
                        apelido="Arrasôu"
                        category="SHORT"
                        right="80px"
                        top="80px"
                        font="60px"
                    />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </React.Fragment>
)