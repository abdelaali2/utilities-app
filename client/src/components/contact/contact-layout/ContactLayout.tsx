import React from "react";
import { ContactsList } from "..";
import { Form } from "../../layout";
import { RouteObject } from "react-router-dom";
import { CONTACT_PAGE } from "../../../utilities/PagesIndex";

const ContactLayout: React.FC = () => {
  return (
    <>
      <Form />
      <ContactsList />
    </>
  );
};

export default ContactLayout;

export const ContactRoute: RouteObject = {
  path: CONTACT_PAGE,
  element: <ContactLayout />,
};
