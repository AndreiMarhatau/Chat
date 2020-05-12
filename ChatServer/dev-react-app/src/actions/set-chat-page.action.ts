import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const setChatPageAction = createAction("SET_CHAT_PAGE");

export const setChatPage = (page: number) => (dispatch: Dispatch) =>
  dispatch(setChatPageAction(page));