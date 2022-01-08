/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestStatusType } from './types';

const initAppState = {
  status: 'idle' as RequestStatusType,
};
const slice = createSlice({
  name: 'cart',
  initialState: initAppState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
  },
});
export const appReducer = slice.reducer;

// Actions
export const { setAppStatus } = slice.actions;
