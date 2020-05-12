import { IChatState } from './../interfaces/IChatState';
import { createSelector } from 'reselect';
import { IChatPageState } from '../interfaces/IChatPageState';

export const chatPageSelector = createSelector((state: IChatPageState) => state.page, page => page);
