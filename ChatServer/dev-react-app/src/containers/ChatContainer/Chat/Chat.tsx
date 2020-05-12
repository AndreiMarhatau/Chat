import React, { useState, useEffect, useRef } from "react"
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
import { throttle } from "lodash";
import { chatPageSelector } from "../../../selectors/chat-page.selector";
import { setChatPage } from "../../../actions/set-chat-page.action";


const sn = styleNames(styles);

const generateRandom = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}


const Chat: React.FC<IChatId> = (data) => {
  const chatHistory = useSelector(chatHistorySelector);
  const user = useSelector(userSelector);
  const chatName = useSelector(chatNameSelector(+data.chatId));
  const page = useSelector(chatPageSelector);
  const [msg, setMsg] = useState('');
  const [count,] = useState(10);
  const scrollDiv = useRef<HTMLDivElement>(null);
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
    }, [count, data, dispatch, page]
  );

  useEffect(() => {
    if (page === 1 && scrollDiv.current !== null) {
      scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight;
    }
  }, [chatHistory])

  useEffect(() => {

  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(msg.trim() === '')
      return;

    dispatch(
      sendMessage(
        { trackId: generateRandom(99999999), text: msg, conversationId: +data.chatId },
        user.id));
    setMsg('');

    setTimeout(() => {
      if (scrollDiv.current !== null)
        scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight
    }, 10);
  }
  const handleChange = (e: any) => {
    setMsg(e.target.value);
  }

  const handleScroll = (e: any) => {
    e.persist();

    //For prevent sticking scroll to top
    if (e.target.scrollTop === 0) {
      e.target.scrollTop = 1;
    }

    if (e.target.scrollTop <= 250) {
      throttle(() => setTimeout(() => dispatch(setChatPage(page + 1)), 100), 100)();
    }
  }

  return (
    <div>
      {chatName}
      <div ref={scrollDiv} className={sn('chat')} onScroll={(e) => handleScroll(e)}>
        {chatHistory.map((msg: IChat) => {
          return (
            <ChatItem key={msg.id} msg={msg} />
          )
        })}
      </div>
      <form className={sn('form')} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField value={msg} id="standard-basic" label="Наберите текст" onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
}

export default Chat;