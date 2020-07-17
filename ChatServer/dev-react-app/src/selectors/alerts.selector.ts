import { createSelector } from "reselect";
import { IAlertState } from "../interfaces/IAlertState";

export const alertsSelector = createSelector((state: IAlertState) => state.alerts, alerts => alerts);