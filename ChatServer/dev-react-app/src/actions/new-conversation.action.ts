import { apiHost } from './../constants/apiHost';
import { INewUserChat } from './../interfaces/INewUserChat';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const newConvAction = createAction("NEW_CONVERSATION");

export const newConv = (data: INewUserChat) => (dispatch: Dispatch) => {
  fetch(`${apiHost}api/chat/create-conversation`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(res => dispatch(newConvAction(res)));
}