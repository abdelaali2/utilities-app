import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotificationFromList } from "../../../../redux/slices/NotificationSlice";
import { IResponse } from "../../../../utilities/Interfaces";
import "./NotificationComponent.scss";

interface AlertProps extends IResponse {
  index: number;
}

export const NotificationComponent: React.FC<AlertProps> = ({
  title,
  message,
  severity,
  index,
}) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(deleteNotificationFromList(index));
  }, 5000);

  return (
    <Alert
      className="alert fade-in-out"
      variant="filled"
      severity={severity}
      onClose={() => {
        dispatch(deleteNotificationFromList(index));
      }}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};
