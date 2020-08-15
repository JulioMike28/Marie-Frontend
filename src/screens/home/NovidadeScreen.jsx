import React, {useEffect, useState} from 'react'
import icon from '../../imagens/favicon.ico'
import api from '../../service/api.js'

function NovidadeScreen (props){
    
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
            <center className="title"><h4 style={{color:"purple",fontFamily:"Cookie",fontSize:"80px"}}>Novidades <img src={icon} alt="icon" style={{alignItems:"center"}}/></h4></center>
        <br></br>
        <div id="fotos">
            <ul>
                {
                    products.map(el=>{
                        if(el.novidade==="sim"){
                            return <li>
                                <div className="card">
                                    <div className="img-container p-5">
                                        <img src={el.image} alt="roupa" className="card-image-top"/> 
                                        <button className="cart-btn btn"> Visualização Rápida</button>       
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
                            </li>
                        }    
                    })
                }
            </ul>
        </div>
    </React.Fragment>
}

export default NovidadeScreen