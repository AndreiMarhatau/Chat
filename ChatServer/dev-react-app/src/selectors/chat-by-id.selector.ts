import { createSelector } from 'reselect';

export const chatNameSelector = (id: number) => {
  return createSelector((state: any) => state.chats, chats => chats.find((chat: any) => chat.id === id).name);
}