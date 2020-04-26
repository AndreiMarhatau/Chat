import React from "react"
import styles from './Logo.scss';
import { styleNames } from "../../../services/styleNames";
import { routesMap } from "../../../constants/routes";
import { NavLink } from "react-router-dom";

const sn = styleNames(styles);


const Logo: React.FC = () => {
  return (<NavLink to={routesMap.Main.route}><img className={sn('logo')} src={'../../../public/logo.png'} alt='logo'/></NavLink>);
}

export default Logo;