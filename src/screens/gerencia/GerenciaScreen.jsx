import React, { useEffect, useState } from 'react'
import icon from '../../imagens/favicon.ico'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { saveProduct, listProducts, deleteProduct } from '../../actions/productActions';

function GerenciaScreen (props){
    const history = useHistory();
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [cor, setCor] = useState('');
    const [description, setDescription] = useState('');
    const [novidade, setNovidade] = useState('');
    const [promocao, setPromocao] = useState('');
    const [desconto, setDesconto] = useState('');
    const productList = useSelector(state => state.productList);
    const {loading, products, error } = productList;
    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(successSave){
            setModalVisible(false)
        }
        dispatch(listProducts())
        return()=>{
            
        };
    }, [successSave, successDelete]);

    const openModal = (product) =>{
        setModalVisible(true);
        if(product!=null){
            setID(product.product._id)
            setName(product.product.name);
            setImage(product.product.image);
            setPrice(product.product.price);
            setCategory(product.product.category);
            setQuantidade(product.product.countInStock);
            setCor(product.product.cor);
            setDescription(product.product.description);
            setNovidade(product.product.novidade);
            setPromocao(product.product.promocao);
            setDesconto(product.product.desconto);
        }else{
            setID('')
            setName('');
            setImage('');
            setPrice('');
            setCategory('');
            setQuantidade('');
            setCor('');
            setDescription('');
            setNovidade('');
            setPromocao('');
            setDesconto('');
        }
        
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveProduct(id,name,image,price,category,quantidade,cor,description,novidade,promocao,desconto));
    } 
    const deleteHandle = (product)=>{
        dispatch(deleteProduct(product.product._id))
    }

    return <React.Fragment>
        <br></br> 
        <center> <h4 style={{color:"purple"}}>Gerência <img src={icon} alt="icon" /></h4></center>
        <button className="btnNovaRoupa btn" onClick={()=>openModal(null)}>Nova Roupa</button>
        <button className="btnFinancas btn" onClick={()=>openModal(null)}>Finanças</button>
        <div className="row">
            <div className="content-table">
                <center><h4 style={{color:"purple"}}> Lista de Roupas</h4></center>
                <table style={{borderSpacing:"0 8px", borderCollapse:'separate', marginTop:"-8px"}}>
                    <thead style={{background:"#FFD4D4", color:"purple", padding:"10px", margin:"10px", height:"20px"}}>
                        <tr>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Preço</td>
                            <td>Categoria</td>
                            <td>Quantidade</td>
                            <td>Cor</td>
                            <td>Descrição</td>
                            <td>Novidade</td>
                            <td>Promoção</td>
                            <td>Desconto</td>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                        
                            products ? 
                                products.map(product =>( <tr>
                                    <td>{product.name}</td>
                                    <td>{product.image}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.countInStock}</td>
                                    <td>{product.cor}</td>
                                    <td>{product.description}</td>
                                    <td>{product.novidade}</td>
                                    <td>{product.promo}</td>
                                    <td>{product.desconto}</td>
                                    <td colSpan="2">
                                        <span style={{color:"yellow"}}><i onClick={()=> openModal({product})} className="fa fa-pencil acoes"></i></span>
                                        <span style={{color:"red",marginLeft:"20px"}}><i onClick={()=> deleteHandle({product})} className="fa fa-times acoes"></i></span>
                                        
                                    </td>
                                </tr>))
                                :
                                "sem dados para exibir"
                        }
                    </tbody>
                </table>
            </div>
        </div>
        {modalVisible && <center><div className="content-produto">      
                <div id="login">
                    <form onSubmit={submitHandler}> 
                        <h4 style={{color:"purple"}}>{id ?"Atualizar Peça":"Nova Roupa"}</h4>
                        {loadingSave && <div>Loading ....</div>} 
                        {errorSave && <div>Error....</div>}
                        <div className="row">
                            <div className="col-md-4">
                                <p> 
                                    <label htmlFor="nome_login">Nome</label>
                                    <input id="nome_login" required="required" type="text" placeholder="ex. Rita de Cássia" name="user" value={name} className="login-input" onChange={(e)=> setName(e.target.value)}/>
                                </p>
                                <p> 
                                    <label htmlFor="image_login">Imagem</label>
                                    <input id="image_login" required="required" type="text" name="imagem" className="login-input" value={image} onChange={(e)=> setImage(__dirname +'/'+e.target.value)}/>
                                </p>
                                <p> 
                                    <label htmlFor="preco_login">Preço</label>
                                    <input id="preco_login" required="required" type="text" placeholder="ex. R$ 0.00" name="tel" value={price} className="login-input" onChange={(e)=> setPrice(e.target.value)}/> 
                                </p>
                                <p> 
                                    <label htmlFor="categoria_login">Categoria</label>
                                    <input id="categoria_login" required="required" type="text" placeholder="ex. Vestido, Saia, Calça." name="text"  value={category} className="login-input" onChange={(e)=> setCategory(e.target.value)}/> 
                                </p>
                                
                            </div>
                            <div className="col-md-4">
                                <p> 
                                    <label htmlFor="quantidade_login">Quantidade</label>
                                    <input id="quantidade_login" required="required" type="text" placeholder="ex. 1,2,3.." name="text" value={quantidade} className="login-input" onChange={(e)=> setQuantidade(e.target.value)}/> 
                                </p>
                                <p> 
                                    <label htmlFor="cor_login">Cor</label>
                                    <input id="cor_login" required="required" type="text" placeholder="ex. Azul, vermelho" name="cor" value={cor} className="login-input" onChange={(e)=> setCor(e.target.value)}/> 
                                </p>
                                <p> 
                                    <label htmlFor="descricao_login">Descrição:</label>
                                    <input id="descricao_login" required="required" type="text" placeholder="ex. senha" name="password" value={description} className="login-input" onChange={(e)=> setDescription(e.target.value)}/> 
                                </p>
                                <p> 
                                    <label htmlFor="novidade_login">Novidade:</label>
                                    <input id="novidade_login" required="required" type="text" placeholder="ex. sim ou nao" name="novidade" value={novidade} className="login-input" onChange={(e)=> setNovidade(e.target.value)}/> 
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p> 
                                    <label htmlFor="promo_login">Promoção:</label>
                                    <input id="promo_login" required="required" type="text" placeholder="ex. sim ou nao" name="promocao" value={promocao} className="login-input" onChange={(e)=> setPromocao(e.target.value)}/>  
                                </p>
                                <p> 
                                    <label htmlFor="desconto_login">Desconto:</label>
                                    <input id="desconto_login" required="required" type="text" placeholder="ex. 0- se nao tiver / R$ X se tiver  " name="desconto" value={desconto} className="login-input" onChange={(e)=> setDesconto(e.target.value)}/>  
                                </p>
                                <br></br>
                                <br></br>
                                <p> 
                                    <button type="submit" className="btnSalvar"> { id ? "Atualizar" : "Salvar" }</button>  
                                </p>
                                <p> 
                                    <input className="voltar btn" onClick={()=>{setModalVisible(false)}}type="button" value="Voltar" /> 
                                </p>
                                </div>
                            </div>
                            
                            
                        </form>
                    </div>
                </div></center>
                }
     </React.Fragment>
    
   
}

export default GerenciaScreen