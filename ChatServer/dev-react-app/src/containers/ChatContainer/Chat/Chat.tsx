import React, { useState, useEffect } from "react"
import styles from './Chat.scss';
import { styleNames } from "../../../services/styleNames";
import { useSelector, useDispatch } from "react-redux";
import { chatHistorySelector } from "../../../selectors/chat-history.selector";
import { TextField } from "@material-ui/core";
import { userSelector } from "../../../selectors/user-login.selector";
import { sendMessage } from "../../../actions/add-message.action";
import { IChat } from "../../../interfaces/IChat";
import { chatNameSelector } from "../../../selectors/chat-by-id.selector";
import { IChatId } from "../interfaces/IChatId";
import { getChatHistory } from "../../../actions/chat-history.action";
import ChatItem from "./ChatItem/ChatItem";


const sn = styleNames(styles);

const generateRandom = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}


const Chat: React.FC<IChatId> = (data) => {
  const chatHistory = useSelector(chatHistorySelector);
  const user = useSelector(userSelector);
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(8);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getChatHistory(
        {
          id: data.chatId,
          count: count,
          page: page
        }
      ));
    }, [count, data.chatId, page]
  );
  const chatName = useSelector(chatNameSelector(+data.chatId));

  const handleSubmit = (e: any) => {
    dispatch(
      sendMessage(
        { trackId: generateRandom(99999999), text: msg, conversationId: +data.chatId },
        user.id));
    setMsg('');
    e.preventDefault();
  }
  const handleChange = (e: any) => {
    setMsg(e.target.value);
  }

  const handleScroll = (e: any) => {
    e.persist();
    console.log(e);
  }

  return (
    <div className={sn('chat')} onScroll={(e) => handleScroll(e)}>
      {chatName}
      {chatHistory.map((msg: IChat) => {
        return (
          <ChatItem key={msg.id} msg={msg}/>
        )
      })}
      <form className={sn('form')} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField value={msg} id="standard-basic" label="Наберите текст" onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
}

export default Chat;