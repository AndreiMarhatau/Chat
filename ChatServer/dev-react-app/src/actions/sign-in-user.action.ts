import { IUserLogin } from './../containers/AuthContainer/interfaces/IUserLogin';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";
import { apiHost } from '../constants/apiHost';


export const signInUserAction = createAction("SIGN_IN_USER");

export const signInUser = (data: IUserLogin) => (dispatch: Dispatch) =>
  fetch(`${apiHost}api/user/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(res => dispatch(signInUserAction(res)));