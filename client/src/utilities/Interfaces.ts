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

export interface IPopup {
  show: boolean;
  message: string;
  handler: () => void;
}
