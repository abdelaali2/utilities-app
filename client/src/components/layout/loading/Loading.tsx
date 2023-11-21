import { CircularProgress } from "@mui/material";
import React from "react";
import "./Loading.scss";

export const Loading: React.FC = () => {
  return (
    <div className="bg">
      <CircularProgress />
    </div>
  );
};
