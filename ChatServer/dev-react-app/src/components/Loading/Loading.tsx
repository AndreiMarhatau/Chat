import React from "react";
import styles from "./Loading.scss";
import { styleNames } from "../../services/styleNames";

const sn = styleNames(styles);


const Loading: React.FC = () => {
    return <img className={sn('loading-wheel')} src='public/loading.gif'/>;
}

export default Loading;