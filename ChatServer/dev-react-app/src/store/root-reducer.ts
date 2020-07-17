import { chatPageReducer } from './../reducers/chat-page.reducer';
import { searchUserReducer } from './../reducers/search-user.reducer';
import { userReducer } from './../reducers/user-login.reducer';
import { combineReducers } from 'redux';
import { chatHistoryReducer } from '../reducers/chat-hisroty.reducer';
import { chatListReducer } from '../reducers/chat-list.reducer';
import { changePasswordReducer } from '../reducers/change-password.reducer';
import { alertReducer } from '../reducers/alert.reducer';

const createRootReducer = () => combineReducers({
  user: userReducer,
  chat: chatHistoryReducer,
  chats: chatListReducer,
  users: searchUserReducer,
  changePasswordStatus: changePasswordReducer,
  page: chatPageReducer,
  alerts: alertReducer,
});

export default createRootReducer;