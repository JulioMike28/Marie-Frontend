import React, { useEffect, useState } from 'react'
import icon from '../../imagens/favicon.ico'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../../actions/productActions';


function DetailsScreen (props){
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return()=>{
            
        };
    }, []);

    return <React.Fragment>
        <br></br>
            <center><h4 style={{color:"purple"}}>Detalhes <img src={icon} alt="icon" /></h4></center>
            {loading? <div>Loading...</div>:
             error? <div>{error}</div>:
                (
                    <div className="row p-5 ">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="img-container  ml-5">
                                <img src={product.image} alt="produto" className="card-image-top"></img>
                            </div>
                        </div>
                        <div className="col-md-5 details mr-5">
                            <center><p style={{fontFamily:"Cookie", color:"purple", fontSize:"100px"}}>{product.name}</p></center>
                            <ul>
                                <li>Categoria: {product.category}</li>
                                <li>Cor:  <div className="cor"><div style={{backgroundColor:`${product.cor}`}}></div></div></li>
                                <li>Quantidade: {product.countInStock}</li>
                                <li>Preço: {product.price}</li>
                            </ul>
                            <button className="btn">Adicionar ao Carrinho</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    
                )
            }
       
        <br></br>
        
    </React.Fragment>
}

export default DetailsScreen