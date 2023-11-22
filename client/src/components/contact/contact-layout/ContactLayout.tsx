import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { ContactsList } from "..";
import { CONTACT_PAGE as CONTACTS_PAGE } from "../../../utilities/PagesIndex";
import { Form } from "../../layout";
import { ContactPage } from "../contact-page";

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
  path: CONTACTS_PAGE,
  element: <Outlet />,
  children: [
    { index: true, element: <ContactLayout /> },
    { path: ":id", element: <ContactPage /> },
  ],
};
