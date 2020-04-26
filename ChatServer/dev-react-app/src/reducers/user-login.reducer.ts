import { signOutUserAction } from './../actions/sign-out-user.action';
import { signInUserAction } from './../actions/sign-in-user.action';
import { registerNewUserAction } from './../actions/register-new-user.action';
import { handleActions } from 'redux-actions';
import { getUserAction } from '../actions/user-login.action';

export const userReducer = handleActions({
  [`${getUserAction}`]: (state, {payload}) => {
    state = payload;
    return state;
  },
  [`${registerNewUserAction}`]: (state, {payload}) => {
    state = payload;
    return state;
  },
  [`${signInUserAction}`]: (state, {payload}) => {
    state = payload;
    return state;
  },
  [`${signOutUserAction}`]: (state, {payload}) => {
    state = payload;
    return state;
  },
}, {id: 0, login: ''});