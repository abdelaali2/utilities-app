import {
  CreateSliceOptions,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { IPopup } from "../../utilities/Interfaces";

const initialState: IPopup = {
  show: false,
  message: "",
  handler: () => {},
};

const sliceOptions: CreateSliceOptions = {
  name: "popupSlice",
  initialState,
  reducers: {
    closePopup: () => initialState,
    openPopup: (state, action: PayloadAction<IPopup>) => {
      state = action.payload;
      return state;
    },
  },
};

export const popupSlice = createSlice(sliceOptions);
export const { closePopup, openPopup } = popupSlice.actions;
export default popupSlice.reducer;
