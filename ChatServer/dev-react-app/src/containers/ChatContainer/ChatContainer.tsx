import React from "react"
import styles from './ChatContainer.scss';
import { styleNames } from "../../services/styleNames";
import Chat from "./Chat/Chat";
import { IChatProps } from "./interfaces/IChatProps";

const sn = styleNames(styles);

const ChatContainer: React.FC<IChatProps> = (props) => {

    const isChoosenChat = () => props.match.params.id !== undefined;

    if (!isChoosenChat()) {
        return (
            <div className={sn('chat-empty')}>
                Выберите чат слева для начала.
            </div>
        );
    }
    return (<div className={sn('chat-wrapper')}>
        <Chat chatId={props.match.params.id}/>
        </div>
    );
}

export default ChatContainer;