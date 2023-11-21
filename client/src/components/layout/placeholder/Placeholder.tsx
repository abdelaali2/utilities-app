import { ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./Placeholder.scss";

const Placeholder: React.FC = () => {
  return (
    <div className="container">
      <div className="arrContainer">
        <ArrowUpward className="upArr" fontSize="large" />
      </div>
      <h2>Add new contact</h2>
    </div>
  );
};

export default Placeholder;
