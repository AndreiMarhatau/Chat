import React, { useState, Fragment } from "react"
import styles from './Chat.scss';
import { styleNames } from "../../../services/styleNames";
import { useSelector, useDispatch } from "react-redux";
import { chatHistorySelector } from "../../../selectors/chat-history.selector";
import { Card, CardContent, Typography, TextField } from "@material-ui/core";
import { userSelector } from "../../../selectors/user-login.selector";
import { sendMessage } from "../../../actions/add-message.action";
import { IChat } from "../../../interfaces/IChat";
import { chatNameSelector } from "../../../selectors/chat-by-id.selector";
import { IChatId } from "../interfaces/IChatId";
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';


const sn = styleNames(styles);

const generateRandom = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}


const Chat: React.FC<IChatId> = (data) => {
  const chatHistory = useSelector(chatHistorySelector);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

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
  return (
    <div className={sn('chat')}>
      {chatName}
      {chatHistory.map((msg: IChat) => {
        return (<Fragment key={msg.id}>
          <Card className={sn(`msg msg__${msg.id} msg__${msg.ownerId === user.id ? 'right' : 'left'}`)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {msg.date.toString()}
              </Typography>
              <Typography variant="body2" component="p">
                {msg.message}
              </Typography>
            </CardContent>
          </Card>
          {msg.pending && <ThreeSixtyIcon />}
          </Fragment>
        )
      })}
      <form className={sn('form')} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField value={msg} id="standard-basic" label="Наберите текст" onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
}

export default Chat;