import {
  CreateSliceOptions,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { IResponse } from "../../utilities/Interfaces";

const initialState: IResponse[] = [];

const sliceOptions: CreateSliceOptions = {
  name: "notificationSlice",
  initialState,
  reducers: {
    addNotificationToList: (state, action: PayloadAction<IResponse>) => {
      state.push(action.payload);
      return state;
    },
    deleteNotificationFromList: (state, action: PayloadAction<number>) => {
      state = state.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_el: any, index: number) => index !== action.payload
      );
      return state;
    },
    resetNotificationList: () => initialState,
  },
};

export const notificationSlice = createSlice(sliceOptions);
export const {
  addNotificationToList,
  deleteNotificationFromList,
  resetNotificationList,
} = notificationSlice.actions;
export default notificationSlice.reducer;
