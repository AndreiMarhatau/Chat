import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const searchUsersAction = createAction("SEARCH_USERS");

export const searchUsers = (data: string) => (dispatch: Dispatch) =>
  fetch(`${apiHost}api/user/search-users?login=${data}`)
  .then(res => res.json())
  .then(res => dispatch(searchUsersAction(res)));