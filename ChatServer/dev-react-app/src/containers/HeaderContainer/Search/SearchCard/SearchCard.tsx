import React, { useState, useEffect } from 'react';
import styles from './SearchCard.scss';
import { styleNames } from '../../../../services/styleNames';
import { Paper, ListItem, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { searchUserSelector } from '../../../../selectors/search-user.selector';
import { userSelector } from '../../../../selectors/user-login.selector';
import { newConv } from '../../../../actions/new-conversation.action';
import { ISearchedUser } from '../../../../interfaces/ISearchedUser';

const sn = styleNames(styles);

const SearchCard: React.FC = () => {
  const users = useSelector(searchUserSelector);

  const user = useSelector(userSelector);
  const [chosenUser, setChosenUser] = useState<ISearchedUser | null>(null);
  const dispatch = useDispatch();

  const handleClick = (user: ISearchedUser) => {
    setChosenUser(user);
  }

  useEffect(() => {
    if (chosenUser !== null) {
      dispatch(newConv({ userIds: [user.id, chosenUser.id], name: `${user.login}, ${chosenUser.login}` }));
      setChosenUser(null);
    }
  });

  return <Paper className={sn('user__list')}>
    {users.map(user =>
      <ListItem key={user.id} role={undefined} dense button onClick={() => handleClick(user)}>
        <ListItemText primary={`${user.login}`} />
      </ListItem>)}
  </Paper>
}

export default SearchCard;