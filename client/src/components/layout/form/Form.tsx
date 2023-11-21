import { Add, PersonAdd } from "@mui/icons-material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { ModalContainer } from "..";
import { ADD_CONTACT_API } from "../../../utilities/APIs";
import { IContact } from "../../../utilities/Interfaces";

// styles
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContactToList } from "../../../redux/slices/ContactSlice";
import { addNotificationToList } from "../../../redux/slices/NotificationSlice";
import { createNotificationContent } from "../../../utilities/Helper";
import "./Form.scss";

const Form: React.FC = () => {
  const voidContact: IContact = { name: "", id: "", age: 0 };
  const [input, setInput] = useState<IContact>(voidContact);
  const dispatch = useDispatch();
  const ageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Form Validation and using Material UI Form

    axios
      .post(ADD_CONTACT_API, input)
      .then((response) => {
        dispatch(addContactToList(input));
        const submitResponse = createNotificationContent(true, response.data);
        dispatch(addNotificationToList(submitResponse));
      })
      .catch((e) => {
        const submitResponse = createNotificationContent(
          false,
          e.response.data.errors[0].defaultMessage
        );
        dispatch(addNotificationToList(submitResponse));
      })
      .finally(() => {
        const nameRefCurrent = nameRef.current;
        const ageRefCurrent = ageRef.current;
        if (nameRefCurrent) {
          nameRefCurrent.value = "";
          nameRefCurrent.focus();
        }
        if (ageRefCurrent) {
          ageRefCurrent.value = "";
        }
        setInput(voidContact);
      });
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = { ...input, [e.target.name]: e.target.value };
    setInput(newInput);
  };

  return (
    <ModalContainer title="new contact" icon={<Add />} variant="outlined">
      {/* TODO: add Autocomplete feature */}
      <form onSubmit={formHandler} className="formClass">
        <div className="inputsContainer">
          <input
            type="text"
            autoFocus
            value={input.name}
            ref={nameRef}
            placeholder="Name"
            onChange={inputHandler}
            name="name"
          />
          <input
            type="number"
            min={0}
            ref={ageRef}
            placeholder="Age"
            onChange={inputHandler}
            name="age"
          />
        </div>
        <Button type="submit" variant="outlined" className="submitBtn">
          <PersonAdd fontSize="large" />
        </Button>
      </form>
    </ModalContainer>
  );
};

export default Form;
