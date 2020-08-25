import React, { useEffect, useState } from 'react'
import icon from '../../imagens/favicon.ico'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../actions/userActions';
import { useHistory, Link } from 'react-router-dom'

function LoginScreen (props){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(()=>{
        if(userInfo){
            history.push(redirect);
        }
        return()=>{
            
        };
    }, [userInfo]);
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email,password));
    } 

    return <div className="content">      
        <div id="login">
            <form onSubmit={submitHandler}> 
                <h1>Login <img src={icon} alt="icon"></img></h1>
                {loading && <div>Loading ....</div>} 
                {error && <div>Error....</div>}
                <p> 
                    <label htmlFor="nome_login">Seu e-mail</label>
                    <input id="nome_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com" name="user" className="login-input" onChange={(e)=> setEmail(e.target.value)}/>
                </p>
                
                <p> 
                    <label htmlFor="senha_login">Sua senha</label>
                    <input id="senha_login" required="required" type="password" placeholder="ex. senha" name="password" className="login-input" onChange={(e)=> setPassword(e.target.value)}/> 
                </p>
                <p>
                    Não possuir conta? <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} style={{color:"purple"}}> Registre-se </Link>
                </p>
                <p> 
                    <button type="submit" className="btnSalvar">Entrar</button> 
                </p>
            </form>
        </div>
    </div>
   
}

export default LoginScreen