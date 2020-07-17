import React from 'react';
import { IAlertProps } from "./interfaces/IAlertProps";
import Alert from '@material-ui/lab/Alert';

const AlertComponent: React.FC<IAlertProps> = (props: IAlertProps) => {

    return <Alert onClose={() => props.onDeleteCallback()} severity={props.alert.type}>{props.alert.text}</Alert>
}

export default AlertComponent;