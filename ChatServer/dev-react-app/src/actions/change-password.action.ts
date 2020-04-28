import { INewPassword } from './../interfaces/INewPassword';
import { apiHost } from './../constants/apiHost';
import { createAction } from 'redux-actions';
import { Dispatch } from "redux";


export const changePasswordAction = createAction("CHANGE_PASSWORD");

export const changePassword = (data: INewPassword, resetAfter: number) => (dispatch: Dispatch) => {
  fetch(`${apiHost}api/user/change-password`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => { 
      dispatch(changePasswordAction(res.status));
      setTimeout(() => dispatch(changePasswordAction(0)), resetAfter);
    });
}