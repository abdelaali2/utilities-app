import CloseIcon from "@mui/icons-material/Close";
import { Button, ButtonOwnProps, Modal } from "@mui/material";
import { useState } from "react";
import "./ModalContainer.scss";

interface IModalInterface {
  title: string;
  icon: React.ReactNode;
  variant?: ButtonOwnProps["variant"];
  children: React.ReactNode;
}

const ModalContainer: React.FC<IModalInterface> = ({
  icon,
  title,
  children,
  variant,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="btnContainer">
        <Button
          size="medium"
          variant={variant}
          onClick={handleOpen}
          className="titleBtn"
        >
          {icon}
          {title}
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div>
          <Button className="closeBtn" color="inherit">
            <CloseIcon onClick={handleClose} fontSize="large" />
          </Button>
          {children}
        </div>
      </Modal>
    </>
  );
};

export default ModalContainer;
