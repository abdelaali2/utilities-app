import { IResponse } from "./Interfaces";

export const createNotificationContent = (
  isSuccessful: boolean,
  message: string
) => {
  if (isSuccessful)
    return {
      message,
      title: "Success",
      severity: "success",
    } as IResponse;

  return {
    message,
    title: "Error",
    severity: "error",
  } as IResponse;
};
