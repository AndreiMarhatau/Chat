import { createAction } from "redux-actions";
import { IAlert } from "../interfaces/IAlert";
import { Dispatch } from "redux";
import { removeAlert } from "./remove-alert.action";

export const addAlertAction = createAction("ADD_ALERT");

export const addAlert = (alert: IAlert, inputDispatch: Dispatch<any>) => (dispatch: Dispatch) => {
    setTimeout(() => inputDispatch(removeAlert(alert)), 10000);
    dispatch(addAlertAction([alert]));
}