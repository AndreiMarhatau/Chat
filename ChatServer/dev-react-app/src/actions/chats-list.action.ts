import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const getChatsAction = createAction("CHAT_LIST");

export const getChats = () => (dispatch: Dispatch) =>
  fetch(`${apiHost}api/chat/conversations`)
    .then(res => res.json())
    .then(res => dispatch(getChatsAction(res)));