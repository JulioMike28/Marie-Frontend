import Axios from 'axios'
import Cookie from 'js-cookie'
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } }).then(alert('dispatch request funcionou'));
    try {
      const { data } = await Axios.post("/api/users/signin", { email, password });
      alert('Action: '+ data.data);
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data }).then(alert('dispatch Sucesso funcionou')).catch(alert('dispatch sucesso n funcionou'));
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }
const register = (name,email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name,email, password } }).then(alert('dispatch request funcionou'));
  try {
    const { data } = await Axios.post("/api/users/register", { name,email, password });
    alert('Action: '+ data.data);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data }).then(alert('dispatch Sucesso funcionou')).catch(alert('dispatch sucesso n funcionou'));
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}



export { signin, register}