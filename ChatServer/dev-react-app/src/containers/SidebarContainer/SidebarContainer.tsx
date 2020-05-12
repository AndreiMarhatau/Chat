import React, { useEffect } from "react"
import styles from './SidebarContainer.scss';
import { styleNames } from "../../services/styleNames";
import SidebarItem from "./SidebarItem/SidebarItem";
import { Link, NavLink } from "react-router-dom";
import { routesMap } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { clearChatHistory } from "../../actions/clear-chat-history.action";
import { getChats } from "../../actions/chats-list.action";
import { chatsSelector } from "../../selectors/chats-list.selector";
import { ISidebarChat } from "../../interfaces/ISidebarChat";
import { setChatPage } from "../../actions/set-chat-page.action";

const sn = styleNames(styles);

const SidebarContainer: React.FC = () => {

    const list = useSelector(chatsSelector);
    const dispatch = useDispatch();

    const handleClick = (e: any) => {
        dispatch(setChatPage(1));
        dispatch(clearChatHistory());
    }

    useEffect(() => {
        dispatch(getChats());
    }, []);
    return (
        <div className={sn('sidebar-list')}>
            {list.map((item: ISidebarChat) =>
                    {
                    return (<NavLink onClick={(e) => handleClick(e)} key={item.id} to={routesMap.Conversations.route + `/${item.id}`}>
                        <SidebarItem id={item.id} name={item.name} message={item.lastMsg} />
                    </NavLink>);
                }
            )
            }
        </div>
    );
}

export default SidebarContainer;