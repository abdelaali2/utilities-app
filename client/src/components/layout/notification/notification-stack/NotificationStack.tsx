import React from "react";
import { useSelector } from "react-redux";
import { NotificationComponent } from "..";
import { RootState } from "../../../../redux/Store";
import { IResponse } from "../../../../utilities/Interfaces";

export const NotificationStack: React.FC = () => {
  const notifications: IResponse[] = useSelector(
    (state: RootState) => state.notifications
  );

  return notifications.map((action, index) => (
    <NotificationComponent
      index={index}
      key={index}
      message={action.message}
      severity={action.severity}
      title={action.title}
    />
  ));
};
