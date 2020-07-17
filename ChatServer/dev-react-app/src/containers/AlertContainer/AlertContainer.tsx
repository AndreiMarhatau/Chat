import React, { useState } from "react";
import styles from './AlertContainer.scss';
import { styleNames } from "../../services/styleNames";
import { useSelector, useDispatch } from "react-redux";
import { alertsSelector } from "../../selectors/alerts.selector";
import AlertComponent from "../../components/AlertComponent/AlertComponent";
import { IAlert } from "../../interfaces/IAlert";
import { removeAlert } from "../../actions/remove-alert.action";

const sn = styleNames(styles);

const AlertContainer: React.FC = () => {
    const alerts = useSelector(alertsSelector);
    const dispatch = useDispatch();

    return <div className={sn('alert-div')}>
            {alerts.map(al => <AlertComponent key={al.text} alert={al} onDeleteCallback={() => dispatch(removeAlert(al))}/>)}
        </div>;
}

export default AlertContainer;