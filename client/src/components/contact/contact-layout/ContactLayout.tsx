import React from "react";
import { ContactsList } from "..";
import { Form } from "../../layout";

const ContactLayout: React.FC = () => {
  return (
    <>
      <Form />
      <ContactsList />
    </>
  );
};

export default ContactLayout;
