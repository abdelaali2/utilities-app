import React from "react";
import { ConfirmPopup, Navbar } from "..";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { NotificationStack } from "../notification";
// Styling
import "./MainLayout.scss";

const MainLayout: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications);

  return (
    <>
      <Navbar />
      <Outlet />
      {notifications.length ? (
        <div id="notificationStack">
          <NotificationStack />
        </div>
      ) : (
        <></>
      )}
      <ConfirmPopup />
    </>
  );
};

export default MainLayout;
