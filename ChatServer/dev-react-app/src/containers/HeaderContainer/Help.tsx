import React from "react"
import { routesMap } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const Help: React.FC = () => {
  return (<div className='help'>
    <NavLink to={routesMap.Help.route}><Button variant="outlined" color="primary">Помощь</Button></NavLink>
  </div>);
}

export default Help;