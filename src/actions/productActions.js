import api from '../service/api.js'
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS
} from "../constants/productConstants"



const listProducts = () => async dispatch =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});
        const data = await api.get("/api/products");
        console.log('data',data)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data.data
        });
    }
    catch(error){  
        dispatch({type:PRODUCT_LIST_FAIL, payload:error.message});
    }   
}

const saveProduct = (id,name,image,price,category,countInStock,cor,description,novidade,promocao,desconto) => async(dispatch, getState) =>{
    const {userSignin: {userInfo} } = getState();
    const headers = {
        'Authorization': 'Bearer ' + userInfo.token
    }
    try{
        dispatch({type: PRODUCT_SAVE_REQUEST, payload: {name,image,price,category,countInStock,cor,description,novidade,promocao,desconto}});
        if(!id){
            const {data} = await api.post('/api/products',{name,image,price,category,countInStock,cor,description,novidade,promocao,desconto}, {
                headers:{headers}
            });
            console.log('saveproduct',data)
            dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data})
        }else{
            const {data} = await api.put('/api/products/'+id,{name,image,price,category,countInStock,cor,description,novidade,promocao,desconto}, {
                headers:{headers}
            });
            console.log('saveproduct',data)
            dispatch({type:PRODUCT_SAVE_SUCCESS, payload:data})
        }
       
        
    }catch(error){
        dispatch({type:PRODUCT_SAVE_FAIL, payload:error.message});
    }
}

const detailsProduct = (productId) => async (dispatch) =>{
    try{
        dispatch({
            type:PRODUCT_DETAILS_REQUEST,
            payload: productId    
        });
        const data = await api.get("/api/products/" + productId);
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.data
        });
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.message
        })
    }
}

const deleteProduct = (productId) => async (dispatch,getState) =>{
    const {userSignin: {userInfo} } = getState();
    const headers = {
        'Authorization': 'Bearer ' + userInfo.token
    }
    try{
        dispatch({
            type:PRODUCT_DELETE_REQUEST,
            payload: productId    
        });
        const data = await api.delete("/api/products/" + productId,{
            headers:{
                headers
            }
        });
        dispatch({
            type:PRODUCT_DELETE_SUCCESS, payload: data.data, success:true});
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.message
        })
    }
}

export {listProducts, detailsProduct, saveProduct, deleteProduct}