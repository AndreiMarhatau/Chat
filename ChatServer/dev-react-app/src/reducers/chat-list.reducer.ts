import { getChatsAction } from './../actions/chats-list.action';
import { handleActions } from 'redux-actions';
import { newConvAction } from '../actions/new-conversation.action';


export const chatListReducer = handleActions(
  {
    [`${getChatsAction}`]: (state, { payload }) => {
      return payload;
    },
    [`${newConvAction}`]: (state, { payload }) => {
      return payload;
    },
  }, []
);