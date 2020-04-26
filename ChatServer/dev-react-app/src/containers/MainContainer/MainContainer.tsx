import React from "react"
import styles from './MainContainer.scss';
import { styleNames } from "../../services/styleNames";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import ChatContainer from "../ChatContainer/ChatContainer";
import { RouteComponentProps } from "react-router-dom";

const sn = styleNames(styles);

const MainContainer: React.FC<RouteComponentProps> = (props) => {
  return (
  <div className={sn('main')}>
    <SidebarContainer/>
    <ChatContainer match={props.match}/>
  </div>);
}

export default MainContainer;