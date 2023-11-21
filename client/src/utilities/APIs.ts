const DOMAIN: string = `http://localhost:2203`;
const CONTACT_SUBDIRECTORY: string = `${DOMAIN}/contact`;

export const GET_ALL_CONTACTS_API: string =
  `${CONTACT_SUBDIRECTORY}/all` as const;
export const GET_CONTACT_API: string = `${CONTACT_SUBDIRECTORY}` as const;
export const ADD_CONTACT_API: string = `${CONTACT_SUBDIRECTORY}` as const;
export const DELETE_CONTACT_API: string = `${CONTACT_SUBDIRECTORY}` as const;
