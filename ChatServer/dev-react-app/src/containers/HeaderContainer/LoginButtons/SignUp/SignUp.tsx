import React from "react"
import { routesMap } from "../../../../constants/routes"
import { styleNames } from "../../../../services/styleNames"
import styles from './SignUp.scss';
import { NavLink } from "react-router-dom";

const sn = styleNames(styles);

const SignUp: React.FC = () => {
  return (<div className={sn('sign-up')}>
    <NavLink to={routesMap.SignUp.route}>Регистрация</NavLink>
    </div>);
}

export default SignUp;