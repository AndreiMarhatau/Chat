import { searchUsersAction } from './../actions/user-search.action';
import { handleActions } from 'redux-actions';


export const searchUserReducer = handleActions(
  {
    [`${searchUsersAction}`]: (state, {payload}) => {
      return payload;
    }
  }, []
);