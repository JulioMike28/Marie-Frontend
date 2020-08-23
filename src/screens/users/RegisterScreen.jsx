import React, { useEffect, useState } from 'react'
import icon from '../../imagens/favicon.ico'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../actions/userActions';
import { useHistory, Link } from 'react-router-dom'

function RegisterScreen (props){
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [end, setEnd] = useState('');
    const [cep, setCep] = useState('');
    const [password, setPassword] = useState('');
    const userRegister = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userRegister
    const dispatch = useDispatch();
    useEffect(()=>{
        if(userInfo){
            history.push("/");
        }
        return()=>{
            
        };
    }, [userInfo]);
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(register(name,email,phone,end,cep,password));
    } 

    return <div class="content">      
        <div id="login">
            <form onSubmit={submitHandler}> 
                <h1>Registro <img src={icon} alt="icon"></img></h1>
                {loading && <div>Loading ....</div>} 
                {error && <div>Error....</div>}
                <p> 
                    <label htmlFor="nome_login">Seu Nome</label>
                    <input id="nome_login" required="required" type="text" placeholder="ex. Rita de Cássia" name="user" className="login-input" onChange={(e)=> setName(e.target.value)}/>
                </p>
                <p> 
                    <label htmlFor="email_login">Seu E-mail</label>
                    <input id="email_login" required="required" type="email" placeholder="ex. contato@htmlecsspro.com" name="user" className="login-input" onChange={(e)=> setEmail(e.target.value)}/>
                </p>
                <p> 
                    <label htmlFor="phone_login">Seu Telefone</label>
                    <input id="phone_login" required="required" type="tel" placeholder="ex. 988881111" name="tel" className="login-input" onChange={(e)=> setPhone(e.target.value)}/> 
                </p>
                <p> 
                    <label htmlFor="end_login">Seu Endereco</label>
                    <input id="end_login" required="required" type="tel" placeholder="ex. Rua Tonheca Dantas, 741" name="text" className="login-input" onChange={(e)=> setEnd(e.target.value)}/> 
                </p>
                <p> 
                    <label htmlFor="cep_login">Seu CEP</label>
                    <input id="cep_login" required="required" type="text" placeholder="ex. 59374000" name="text" className="login-input" onChange={(e)=> setCep(e.target.value)}/> 
                </p>
                <p> 
                    <label htmlFor="senha_login">Sua senha</label>
                    <input id="senha_login" required="required" type="password" placeholder="ex. senha" name="password" className="login-input" onChange={(e)=> setPassword(e.target.value)}/> 
                </p>
                <p>
                    Já possuir uma conta? <Link to="/signin" style={{color:"purple"}}> Login</Link>
                </p>
                <p> 
                    <input type="submit" value="Salvar" /> 
                </p>
            </form>
        </div>
    </div>
   
}

export default RegisterScreen