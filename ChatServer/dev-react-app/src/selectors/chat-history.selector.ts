import { IChatState } from './../interfaces/IChatState';
import { createSelector } from 'reselect';

export const chatHistorySelector = createSelector((state: IChatState) => state.chat, chat => chat);
