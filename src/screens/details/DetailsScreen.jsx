import React, { useEffect, useState } from 'react'
import icon from '../../imagens/favicon.ico'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../../actions/productActions';


function DetailsScreen (props){
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return()=>{
            
        };
    }, []);
    const handleAddToCart = () =>{
        props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
    }
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
                                <li>
                                    Quantidade: <select value={qty} className="custom-select" style={{width:"100px"}} onChange={(e)=>{setQty(e.target.value)}}>
                                                    {[...Array(product.countInStock).keys()].map(x=>
                                                        <option key={x+1} value={x+1}>{ x+1 }</option>
                                                    )}
                                                </select>
                                
                                </li>
                                <li>Preço: R$ {product.price}</li>
                            </ul>
                            {product.countInStock>0 && <button  onClick={handleAddToCart} className="btn">Adicionar ao Carrinho</button>
                            }
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    
                )
            }
       
        <br></br>
        
    </React.Fragment>
}

export default DetailsScreen