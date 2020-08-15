import React from 'react'
import ButtonSlider from './ButtonSlider'


export default (props) => (
    <React.Fragment>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={props.image1} alt="First slide" />
                    <ButtonSlider/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.image2} alt="Second slide" />
                    <ButtonSlider/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.image3} alt="Third slide"/>
                    <ButtonSlider/>
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