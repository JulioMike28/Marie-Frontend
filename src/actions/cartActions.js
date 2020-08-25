import api from '../service/api.js'
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) =>{
    try{
        console.log(productId)
        console.log(qty)
        const data = await api.get("/api/products/"+productId);
        dispatch({
            type:CART_ADD_ITEM, 
            payload:{
                product: data.data._id,
                name: data.data.name,
                image: data.data.image,
                price: data.data.price,
                countInStock: data.data.countInStock,
                qty}
            })
            const {cart: {cartItems}} = getState();
            Cookie.set("cartItems",JSON.stringify(cartItems))
       
    } catch (error){
        console.log(error)
    }

}

const removeFromCart = (productId) => async (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems",JSON.stringify(cartItems))

}
const saveShipping = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING, payload:data})
}
const savePayment = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT, payload:data})
}

export { addToCart, removeFromCart, saveShipping, savePayment}