import { handleActions } from "redux-actions";
import { addAlertAction } from "../actions/add-alert.action";
import { IAlert } from "../interfaces/IAlert";
import { removeAlertAction } from "../actions/remove-alert.action";

export const alertReducer = handleActions({
    [`${addAlertAction}`]: (state, {payload}) => {
        return state.concat(payload);
    },
    [`${removeAlertAction}`]: (state, {payload}) => {
        return state.filter(alert => !payload.includes(alert));
    }
}, []);