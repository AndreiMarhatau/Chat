import React, { useState, useEffect } from "react"
import styles from './ChatContainer.scss';
import { styleNames } from "../../services/styleNames";
import { useDispatch } from "react-redux";
import { getChatHistory } from "../../actions/chat-history.action";
import Chat from "./Chat/Chat";
import { IChatProps } from "./interfaces/IChatProps";

const sn = styleNames(styles);

const ChatContainer: React.FC<IChatProps> = (props) => {
    const [count, setCount] = useState(8);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (isChoosenChat())
                dispatch(getChatHistory(
                    {
                        id: props.match.params.id,
                        count: count,
                        page: page
                    }
                ));
        }
    );

    const isChoosenChat = () => props.match.params.id !== undefined;

    if (!isChoosenChat()) {
        return (
            <div className={sn('chat')}>
                Выберите чат слева для начала.
            </div>
        );
    }
    return (
        <Chat chatId={props.match.params.id}/>
    );
}

export default ChatContainer;