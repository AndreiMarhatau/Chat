import { handleActions } from "redux-actions";
import { changePasswordAction } from "../actions/change-password.action";

export const changePasswordReducer = handleActions(
  {
    [`${changePasswordAction}`]: (state, {payload}) => {
      return payload;
    }
  }, 0
);