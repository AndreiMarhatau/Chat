import { apiHost } from './../constants/apiHost';
import { IUserLogin } from './../containers/AuthContainer/interfaces/IUserLogin';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const registerNewUserAction = createAction("REGISTER_NEW_USER");

export const registerNewUser = (data: IUserLogin) => (dispatch: Dispatch) =>
{
  fetch(`${apiHost}api/user/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(res => dispatch(registerNewUserAction(res)));
}