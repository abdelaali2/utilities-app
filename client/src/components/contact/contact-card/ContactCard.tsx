import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteContactFromList } from "../../../redux/slices/ContactSlice";
import { addNotificationToList } from "../../../redux/slices/NotificationSlice";
import { closePopup, openPopup } from "../../../redux/slices/PopupSlice";
import { DELETE_CONTACT_API } from "../../../utilities/APIs";
import { createNotificationContent } from "../../../utilities/Helper";
import { IContact, IPopup } from "../../../utilities/Interfaces";

// Styling
import "./ContactCard.scss";

const ContactCard: React.FC<IContact> = ({ age, id, name }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    axios
      .delete(DELETE_CONTACT_API, {
        params: {
          id,
        },
      })
      .then((response) => {
        dispatch(deleteContactFromList(id));
        const submitResponse = createNotificationContent(true, response.data);
        dispatch(addNotificationToList(submitResponse));
      })
      .catch((e) => {
        const submitResponse = createNotificationContent(
          false,
          e.response.data.errors[0].defaultMessage
        );
        dispatch(addNotificationToList(submitResponse));
      });
    dispatch(closePopup(0));
  };

  const confirmHandler = () => {
    const popupInfo: IPopup = {
      handler: () => handleDelete(id),
      message: "This contact will be deleted!",
      show: true,
    };
    dispatch(openPopup(popupInfo));
  };

  return (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(1)" }}
    >
      <Card variant="outlined" className="card">
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {age}
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="text" onClick={confirmHandler}>
            <DeleteIcon className="deleteBtn" fontSize="medium" />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ContactCard;
