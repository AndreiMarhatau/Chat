import { clearChatHistoryAction } from './../actions/clear-chat-history.action';
import { getChatHistoryAction } from './../actions/chat-history.action';
import { handleActions } from 'redux-actions';
import { addMessageAction, sendMessageAction } from '../actions/add-message.action';

const initialState: any = [];

export const chatHistoryReducer = handleActions(
  {
    [`${getChatHistoryAction}`]: (state, {payload}) => {
      return state.concat(payload);
    },
    [`${clearChatHistoryAction}`]: (state, {payload}) => {
      return initialState;
    },
    [`${sendMessageAction}`]: (state, {payload}) => {
      let i = state.find((item: any) => item.trackId === payload.trackId);
      i.id = payload.id;
      i.pending = false;
      return [...state];
    },
    [`${addMessageAction}`]: (state, {payload}) => {
      state = [...payload, ...state];
      return state;
    },
  }, initialState
);