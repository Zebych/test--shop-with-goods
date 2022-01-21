import { AppRootStateType } from 'store/index';
import { RequestStatusType } from 'store/reducers';

export const selectAppStatus = (state: AppRootStateType): RequestStatusType =>
  state.app.status;
