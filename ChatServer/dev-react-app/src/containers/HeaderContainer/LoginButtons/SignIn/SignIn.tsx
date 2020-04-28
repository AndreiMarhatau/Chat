import React from "react"
import { routesMap } from "../../../../constants/routes"
import { styleNames } from "../../../../services/styleNames"
import styles from './SignIn.scss';
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const sn = styleNames(styles);

const SignIn: React.FC = () => {
  return (<div className={sn('sign-in')}>
    <Button variant="outlined" color="primary"><NavLink to={routesMap.SignIn.route}>Вход</NavLink></Button>
    </div>);
}

export default SignIn;