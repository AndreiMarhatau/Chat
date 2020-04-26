import { IUserState } from './../interfaces/IUserState';
import { createSelector } from 'reselect';

export const userSelector = createSelector((state: IUserState) => state.user, user => user);
