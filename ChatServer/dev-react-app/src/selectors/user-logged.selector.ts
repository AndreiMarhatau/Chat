import { IUserState } from '../interfaces/IUserState';
import { createSelector } from 'reselect';

export const isUserLoggedSelector = createSelector((state: IUserState) => state.user, user => user.id !== 0 );
