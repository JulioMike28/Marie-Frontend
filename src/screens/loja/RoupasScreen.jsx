import React, { useState, useEffect } from 'react'
import api from '../../service/api.js'
import {Link} from 'react-router-dom'

function RoupasScreen(props) {

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

    return <div className="roupas">
        {
            products.map(el=>
                <div className="col-9 mx-auto col-lg-3 my-3">
                    <div className="card">
                        <div className="img-container">
                            {console.log(el.image)}
                            <img src={el.image} alt="roupa" className="card-image-top"/> 
                            <Link to={'/product/'+el._id}>
                                <button className="cart-btn btn"> Detalhes </button>  
                            </Link> 
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">
                                {el.category} - {el.name}
                            </p>
                            <h5 style={{color:"purple"}} className="font-italic mb-0">
                                <span className="mr-1">
                                    R$
                                </span>
                                {el.price}
                            </h5>
                            
                        </div>
                        <button className="btnCart btn">Adicionar ao Carrinho</button>
                    </div>
                </div> 
            )
        }
    </div>
}

export default RoupasScreen