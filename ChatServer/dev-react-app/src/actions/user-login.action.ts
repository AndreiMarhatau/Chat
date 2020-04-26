import { apiHost } from './../constants/apiHost';
import { createAction } from "redux-actions";
import { Dispatch } from "redux";


export const getUserAction = createAction('GET_USER');

export const getUser = () => (dispatch: Dispatch) =>
  fetch(`${apiHost}api/user/user`)
    .then(res => res.json())
    .then(data => dispatch(getUserAction(data)));