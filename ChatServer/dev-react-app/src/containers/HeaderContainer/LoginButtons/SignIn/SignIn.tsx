import React from "react"
import { routesMap } from "../../../../constants/routes"
import { styleNames } from "../../../../services/styleNames"
import styles from './SignIn.scss';
import { NavLink } from "react-router-dom";

const sn = styleNames(styles);

const SignIn: React.FC = () => {
  return (<div className={sn('sign-in')}>
    <NavLink to={routesMap.SignIn.route}>Вход</NavLink>
    </div>);
}

export default SignIn;