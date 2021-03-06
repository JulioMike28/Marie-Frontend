import React, {useEffect, useState} from 'react'
import icon from '../../imagens/favicon.ico'
import api from '../../service/api.js'
import {Link} from 'react-router-dom'

function PromoScreen (props){
    
    const [products, setProduct] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const {data} = await api.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return()=>{

        };
    }, [])
    
    return <React.Fragment>
        <br></br>
            <center>
                <h4 style={{color:"purple",fontFamily:"Cookie",fontSize:"80px"}}>
                    Promoções <img src={icon} alt="icon" style={{alignItems:"center"}}/>
                </h4>
                
            </center>
        <br></br>
        <div>
            <ul className="promo">
                {
                    products.map(el=>{
                        if(el.promo==="sim"){
                            return (<li key={el._id} className="col-9 mx-auto col-lg-3 my-3">
                                <div className="card">
                                    <div className="img-container">
                                        <img src={el.image} alt="roupas" className="card-image-top"/>
                                        <div className="title-promo">
                                            Desconto {el.desconto}%
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">
                                            {el.category} - {el.name}
                                        </p>
                                        <h5 style={{color:"purple"}} className="font-italic mb-0">
                                            <span className="mr-1">
                                                R$
                                            </span>
                                            <strike style={{color:"#f08080"}}>{el.price}</strike> - R${el.price - ((el.price*el.desconto)/100)}
                                        </h5>
                                    </div>
                                    <Link to={'/product/'+el._id}>
                                        <button className="btnCart btn">Detalhes</button>
                                    </Link>
                                </div>
                                
                            </li>
                        )}
                        
                    })
                }
            </ul>
        </div>
    </React.Fragment>
}

export default PromoScreen