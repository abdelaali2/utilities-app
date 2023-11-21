import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactCard } from "..";
import { RootState } from "../../../redux/Store";
import { setContactsList } from "../../../redux/slices/ContactSlice";
import { GET_ALL_CONTACTS_API } from "../../../utilities/APIs";
import { IContact } from "../../../utilities/Interfaces";
import { Loading, Placeholder } from "../../layout";

const ContactsList: React.FC = () => {
  // TODO: create custom hook
  const [isLoading, setIsLoading] = useState(true);

  const savedContacts: IContact[] = useSelector(
    (state: RootState) => state.contacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(GET_ALL_CONTACTS_API)
      .then((response) => {
        dispatch(setContactsList(response.data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, savedContacts.length]);

  return isLoading ? (
    <Loading />
  ) : savedContacts.length ? (
    savedContacts.map((contact: IContact) => (
      <ContactCard
        key={contact.id}
        id={contact.id}
        age={contact.age}
        name={contact.name}
      />
    ))
  ) : (
    <Placeholder />
  );
};

export default ContactsList;
