import { IAlert } from "../../../interfaces/IAlert";

export interface IAlertProps{
    alert: IAlert;
    onDeleteCallback: () => void;
}