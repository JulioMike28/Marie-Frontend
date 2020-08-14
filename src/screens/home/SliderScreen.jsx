import React from 'react'
import SlideItemScreen from './SlideItemScreen'

import image1 from '../../imagens/slide/image1.jpg'
import image2 from '../../imagens/slide/image2.jpg'
import image3 from '../../imagens/slide/image3.jpg'
import image4 from '../../imagens/slide/image4.jpg'
import image5 from '../../imagens/slide/image5.jpg'
import image6 from '../../imagens/slide/image6.jpg'
import fundo from '../../imagens/slide/fundo.png'

export default (props)=>(
    <React.Fragment>
        <div style={{backgroundImage:fundo}}className="slide">
            <div className="row">
                <div className="col-md-4 slide-1">
                    <SlideItemScreen 
                        image1={image1}
                        image2={image2}
                        image3={image3}
                    />
                </div>
                <div className="col-md-4 slide-2">
                    <SlideItemScreen 
                        image1={image4}
                        image2={image5}
                        image3={image6}
                    />
                </div>
                
            </div>
            
        </div>
        <br></br>
    </React.Fragment>
)