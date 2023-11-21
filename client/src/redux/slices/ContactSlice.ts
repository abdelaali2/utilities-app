import {
  CreateSliceOptions,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IContact } from "../../utilities/Interfaces";

const initialState: IContact[] = [];

const sliceOptions: CreateSliceOptions = {
  name: "contactSlice",
  initialState: initialState,
  reducers: {
    // retrieve: (state) => state.value,
    setContactsList: (state, action: PayloadAction<IContact[]>) => {
      state = action.payload;
      return state;
    },
    addContactToList: (state, action: PayloadAction<IContact>) => {
      state.push(action.payload);
      return state;
    },
    deleteContactFromList: (state, action: PayloadAction<string>) => {
      state = state.filter(
        (contact: IContact) => contact.id !== action.payload
      );
      return state;
    },
  },
};

export const contactSlice = createSlice(sliceOptions);
export const { setContactsList, addContactToList, deleteContactFromList } =
  contactSlice.actions;
export default contactSlice.reducer;
