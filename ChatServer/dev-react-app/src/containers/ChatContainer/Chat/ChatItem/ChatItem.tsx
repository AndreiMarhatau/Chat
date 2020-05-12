import { Fragment } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { styleNames } from "../../../../services/styleNames";
import styles from './ChatItem.scss';
import { userSelector } from "../../../../selectors/user-login.selector";
import { useSelector } from "react-redux";
import { IChatProps } from "./interfaces/IChatProps";
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import moment from "moment";

const sn = styleNames(styles);

const ChatItem: React.FC<IChatProps> = (data: IChatProps) => {
  const user = useSelector(userSelector);
  const msg = data.msg;
  
  return <Fragment>
  <Card className={sn(`msg msg__${msg.id} msg__${msg.ownerId === user.id ? 'right' : 'left'}`)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {moment(msg.date).format("DD.MM.YYYY hh:mm:ss")}
      </Typography>
      <Typography variant="body2" component="p">
        {msg.message}
      </Typography>
    </CardContent>
  </Card>
  {msg.pending && <ThreeSixtyIcon />}
</Fragment>;
}

export default ChatItem;