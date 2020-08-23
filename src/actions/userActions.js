import api from '../service/api';
import Cookie from 'js-cookie'
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
      const { data } = await api.post("/api/users/signin", { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data }).then(alert('Login efetuado com Sucesso! ')).catch(alert('dispatch sucesso n funcionou'));
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }
const register = (name,email,telefone,endereco,cep,password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name,email,telefone,endereco,cep,password } })
  try {
    const { data } = await api.post("/api/users/register", { name,email,telefone,endereco,cep,password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data }).then(alert('dispatch Sucesso funcionou')).catch(alert('dispatch sucesso n funcionou'));
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}



export { signin, register}