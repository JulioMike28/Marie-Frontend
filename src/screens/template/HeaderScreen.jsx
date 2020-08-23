import React from 'react'
import logomarca from '../../imagens/logo-footer.png'
import {useDispatch, useSelector} from 'react-redux'
import { removeFromCart } from '../../actions/cartActions';
import {Link} from 'react-router-dom'

function HeaderScreen() {
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;

    const userSignin = useSelector(state=>state.userSignin);
    const { userInfo } = userSignin;

    let cont=0; 
    const dispatch = useDispatch();

    //sidebar functions
    const openMenu = ()=>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
    }
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }

    return(
        <div className="header">
            <div></div>
            <div className="header-img">
                <img src={logomarca} alt="store" className="navbar-brand" />
            </div>
            <div className="header-actions">
                <span className="">
                    <i className="fa fa-user fa-1x"></i>
                    
                    {
                       userInfo ? <Link to="/profile" style={{color:"purple"}}> {userInfo.name} </Link> :
                        <Link to="/signin" style={{color:"purple"}}>Login</Link>
                    }
                </span>
            </div>
            <div className="header-actions">
                <span >
                    <i className="fa fa-shopping-cart fa-1x" ></i>
                    {
                        cartItems.length === 0?
                            <span onClick={openMenu}>Carrinho (0)</span>
                        :
                        cartItems.map(element =>{
                            cont = cont+element.qty;
                            return(
                                <span onClick={openMenu}>Carrinho ({cont})</span>
                            )
                        } )
                    }
                </span>
            </div>
            <aside className="sidebar">
                <button style={{padding:"0px"}}className="sidebar-close-button-up btn" onClick={closeMenu}>X</button>
                <h3 style={{margin:"30px"}}>Carrinho ({cartItems.length===0? 0 : cont})</h3>
                <hr></hr>
                <ul className="cart-list-container">
                {
                    cartItems.length === 0 ?
                        <span style={{fontSize:"20px", color:"purple"}}> Carrinho Vazio. </span>
                    :
                    cartItems.map(item=>
                            <li>
                            <div className="cart-image">
                                <img src={item.image} alt="product"/>
                            </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/"+item.product}>
                                        <p style={{fontFamily:"Cookie", color:"purple", fontSize:"40px"}}>{item.name} - R$ {item.price}</p>
                                    </Link>
                                    
                                </div>
                                <div>
                                    Quantidade: {item.qty} peça  <br></br> 
                                    <span className="sidebar-icon"><i className="fa fa-times-circle-o fa-2x" style={{color:"lightcoral"}} onClick={() =>removeFromCartHandler(item.product)}></i> </span>
                                </div>
                            </div>
                            </li>
                        )
                }
                </ul>
                <hr></hr>
                
                <button  style={{width:"80%",background:"lightcoral",color:"#fff"}} type="button" className="btn">
                    <Link style={{color:"white"}}to="/cart">Ir ao Carrinho</Link>
                </button>
            </aside>
        </div>
    )
    
}

export default HeaderScreen