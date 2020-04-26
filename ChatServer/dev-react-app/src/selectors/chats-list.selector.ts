import { ISidebarChatState } from './../interfaces/ISidebarChatState';
import { createSelector } from 'reselect';

export const chatsSelector = createSelector((state: ISidebarChatState) => state.chats, chats => chats);
