import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { Alert, AlertTitle, Box, Button, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { closePopup } from "../../../redux/slices/PopupSlice";
// Styling
import "./ConfirmPopup.scss";

export const ConfirmPopup: React.FC = () => {
  const { message, show, handler } = useSelector(
    (state: RootState) => state.popups
  );
  const dispatch = useDispatch();

  return (
    <Modal
      open={show}
      onClose={() => {
        dispatch(closePopup(0));
      }}
    >
      <Box className="box">
        <Alert
          icon={<WarningRoundedIcon fontSize="large" />}
          color="warning"
          severity="warning"
        >
          <AlertTitle>{message}</AlertTitle>
          <Button
            size="medium"
            variant="contained"
            color="error"
            className="btn"
            onClick={handler}
          >
            Continue
          </Button>
          <Button
            size="medium"
            variant="contained"
            className="btn"
            onClick={() => {
              dispatch(closePopup(0));
            }}
          >
            Cancel
          </Button>
        </Alert>
      </Box>
    </Modal>
  );
};
