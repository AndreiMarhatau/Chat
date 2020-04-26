import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const signOutUserAction = createAction("SIGN_OUT_USER");

export const signOutUser = () => async (dispatch: Dispatch) => {
  await fetch(`${apiHost}api/user/sign-out`);
  return dispatch(signOutUserAction({id: 0, login: ''}));
}