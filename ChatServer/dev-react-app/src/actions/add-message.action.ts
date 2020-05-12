import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";
import { ISendingMessage } from '../interfaces/ISendingMessage';
import moment from 'moment';


export const sendMessageAction = createAction("SEND_MESSAGE");
export const addMessageAction = createAction("ADD_MESSAGE");

export const sendMessage = (data: ISendingMessage, senderId: number) => (dispatch: Dispatch) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch(`${apiHost}api/chat/send-msg`, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  })
    .then((res: any) => res.json())
    .then((d: any) => dispatch(sendMessageAction(d)));

  const msg =
    [{
      id: +(Math.floor(Math.random() * Math.floor(99999999))),
      message: data.text,
      date: moment(),
      ownerId: senderId,
      pending: true,
      trackId: data.trackId
    }];
    dispatch(addMessageAction(msg));
}