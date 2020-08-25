import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import ChekoutSteps from '../../components/CheckoutSteps'

function PlaceOrderScreen(props) {
    const cart = useSelector(state=>state.cart);
    const {cartItems, shipping, payment} = cart;
    if(!shipping.endereco){
        props.history.push("/shipping")
    }
    if(!payment.paymentMethod){
        props.history.push("/payment")
    }
    
    const itemsPrice = cartItems.reduce((a, c)=>a + c.price*c.qty,0);
    const shippingPrice = itemsPrice > 100? 0 : 10;
    const taxPrice = 0.15 * itemsPrice;
    const frete = taxPrice + shippingPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const dispatch = useDispatch();
    
    const placeOrderHandler = () =>{

    }
    useEffect(()=>{

    }, []);

    const checkoutHandle = () =>{
        props.history.push("/signin?redirect=shipping")
    }
    
    
    return <React.Fragment>
        <ChekoutSteps step1 step2 step3 step4></ChekoutSteps>
        <div className="placeorder"> 
            <div className="placeorder-info">
                <div>
                    <h3 style={{color:"purple"}}> Endereço </h3>
                    <div>
                    {cart.shipping.endereco}, {cart.shipping.cidade},
                    {cart.shipping.cep}, {cart.shipping.telefone},
                    </div>
                </div>
                <div>
                    <h3 style={{color:"purple"}}>Pagamento</h3>
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>
                </div>
                <div>
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
                                        Quant.: {item.qty}
                                    </div>
                                </div>
                                <div className="cart-price">
                                    $ {item.price}
                                </div>
                            </li>)
                    }
                </ul>
                </div>
        </div>
        <div className="placeorder-action">
            <ul>
                <li>
                    <h3 style={{color:"purple"}}>Resumo</h3>
                </li>
                <li>
                    <div>Roupas</div>
                    <div>${itemsPrice}</div>
                </li>
                <li>
                    <div>Frete</div>
                    <div>${frete}</div>
                </li>
                <li>
                    <div>Total da Compra</div>
                    <div>${totalPrice}</div>
                </li>
                <li>
                    <button  style={{width:"100%",background:"limegreen", color:"white",padding:"10px" ,margin:"10px"}} className="btn btnFinalizar" onClick={placeOrderHandler}> Finalizar Pedido </button>
                </li>
            </ul>
        </div>
    </div>
    </React.Fragment>
}

export default PlaceOrderScreen