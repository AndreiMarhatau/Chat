import { createSelector } from 'reselect';

export const changedPasswordStatusSelector = createSelector((state: any) => state.changePasswordStatus, status => status as ChangedPasswordStatus);

export enum ChangedPasswordStatus{
  notCalled = 0,
  success = 200,
  failed = 500
}