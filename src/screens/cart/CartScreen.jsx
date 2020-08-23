import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import icon from '../../imagens/favicon.ico'

function CartScreen(props) {
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
    console.log(cartItems)
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]): 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    }, []);

    const checkoutHandle = () =>{
        props.history.push("/signin?redirect=shipping")
    }
    
    
    return <React.Fragment>
        <br></br>
            <center><h4 style={{color:"purple"}}>Carrinho <img src={icon} alt="icon" /></h4></center>
    <div className="cart"> 
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Lista do Carrinho
                    </h3>
                    <div>
                        Preço p/ Unidade
                    </div>
                </li>
                {
                    cartItems.length === 0?
                    <div>
                        Carrinho vazio.
                    </div>
                    :
                    cartItems.map(item=>
                        <li>
                            <div className="cart-image">
                                <img src={item.image} alt="product"/>
                            </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/"+item.product}>
                                    <p style={{fontFamily:"Cookie", color:"purple", fontSize:"40px"}}>{item.name}</p>
                                    </Link>
                                    
                                </div>
                                <div>
                                    Quant.:
                                    <select value={item.qty} onChange={(e)=> dispatch(addToCart(item.product,e.target.value))}>
                                        {[...Array(item.countInStock).keys()].map( x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>    
                                        )}
                                    </select> <br></br>
                                    <span className="sidebar-icon"><i className="fa fa-times-circle-o fa-2x" style={{color:"lightcoral"}} onClick={() =>removeFromCartHandler(item.product)}></i> </span>
                                </div>
                            </div>
                            <div className="cart-price">
                                $ {item.price}
                            </div>
                        </li>)
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3 style={{color:"white"}}>
                Total da Compra: ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
            </h3>
            <br></br>
            <div className="row">
                <div className="col-md-4">
                    <span style={{fontSize:"30px", color:"white"}}> R$  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span>
                </div>
                <div className="col-md">
                    <button onClick={checkoutHandle} style={{width:"100%",background:"white", color:"lightcoral"}} className="btn btnFinalizar" disabled={cartItems.length === 0}>
                        Finalizar a Comprar?!
                    </button>
                </div>
            </div>
            
        </div>
    </div>
    </React.Fragment>
}

export default CartScreen