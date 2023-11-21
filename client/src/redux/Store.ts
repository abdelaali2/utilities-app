import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/ContactSlice";
import notificationReducer from "./slices/NotificationSlice";
import popupsReducer from "./slices/PopupSlice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    notifications: notificationReducer,
    popups: popupsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
