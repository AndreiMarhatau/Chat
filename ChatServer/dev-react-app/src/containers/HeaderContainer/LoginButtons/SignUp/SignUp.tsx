import React from "react"
import { routesMap } from "../../../../constants/routes"
import { styleNames } from "../../../../services/styleNames"
import styles from './SignUp.scss';
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const sn = styleNames(styles);

const SignUp: React.FC = () => {
  return (<div className={sn('sign-up')}>
    <Button variant="outlined" color="primary"><NavLink to={routesMap.SignUp.route}>Регистрация</NavLink></Button>
    </div>);
}

export default SignUp;