import { AlertColor } from "@mui/material";

export interface IContact {
  name: string;
  age: number;
  id: string;
}

export interface IResponse {
  message: string;
  title: string;
  severity: AlertColor;
}

export const voidContact: IContact = { name: "", id: "", age: 0 };

export interface IPopup {
  show: boolean;
  message: string;
  handler: () => void;
}
