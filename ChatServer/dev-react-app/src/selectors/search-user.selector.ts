import { ISearchedUserState } from './../interfaces/ISearchUserState';
import { createSelector } from 'reselect';

export const searchUserSelector = createSelector((state: ISearchedUserState) => state.users, users => users);
