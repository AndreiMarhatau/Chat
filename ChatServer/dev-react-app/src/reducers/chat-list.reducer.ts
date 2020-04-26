import { getChatsAction } from './../actions/chats-list.action';
import { handleActions } from 'redux-actions';
import { newConvAction } from '../actions/new-conversation.action';


export const chatListReducer = handleActions(
  {
    [`${getChatsAction}`]: (state, { payload }) => {
      if(!(state.length === payload.length && state.every((v,i)=>v === payload[i]))){
        state = payload;
      }
      return state;
    },
    [`${newConvAction}`]: (state, { payload }) => {
      if(!(state.length === payload.length && state.every((v,i)=>v === payload[i]))){
        state = payload;
      }
      return state;
    },
  }, []
);