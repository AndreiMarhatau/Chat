import { setChatPageAction } from './../actions/set-chat-page.action';
import { getChatsAction } from './../actions/chats-list.action';
import { handleActions } from 'redux-actions';
import { newConvAction } from '../actions/new-conversation.action';


export const chatPageReducer = handleActions(
  {
    [`${setChatPageAction}`]: (state, { payload }) => {
      return payload;
    },
  }, 1
);