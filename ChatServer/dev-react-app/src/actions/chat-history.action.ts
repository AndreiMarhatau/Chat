import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";
import { IUserChat } from '../interfaces/IUserChat';


export const getChatHistoryAction = createAction("CHAT_HISTORY");

export const getChatHistory = (data: IUserChat) => (dispatch: Dispatch) =>
  fetch(`${apiHost}api/chat/history?id=${data.id}&count=${data.count}&page=${data.page}`)
    .then(res => res.json())
    .then(res => {
      res = res.map((item: any) => Object.assign(item, {pending: false, trackId: 0}));
      dispatch(getChatHistoryAction(res))
    });