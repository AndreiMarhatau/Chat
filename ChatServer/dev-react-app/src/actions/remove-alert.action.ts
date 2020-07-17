import { createAction } from "redux-actions";
import { Dispatch } from "redux";
import { IAlert } from "../interfaces/IAlert";

export const removeAlertAction = createAction("REMOVE_ALERT");

export const removeAlert = (alert: IAlert) => (dispatch: Dispatch) => {
    dispatch(removeAlertAction([alert]));
}