import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const clearChatHistoryAction = createAction("CLEAR_CHAT_HISTORY");

export const clearChatHistory = () => (dispatch: Dispatch) =>
  dispatch(clearChatHistoryAction([]));