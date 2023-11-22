import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_CONTACT_API } from "../../../utilities/APIs";
import { voidContact } from "../../../utilities/Interfaces";

const ContactPage: React.FC = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(voidContact);

  useEffect(() => {
    axios.get(`${GET_CONTACT_API}/${id}`).then((response) => {
      setContact(response.data);
      console.log("response.data", response.data);
    });
  }, [id]);

  return <div>{JSON.stringify(contact)}</div>;
};

export default ContactPage;
