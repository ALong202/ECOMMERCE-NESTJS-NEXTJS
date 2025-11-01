import { getErrorMessage } from "./erros";
import { API_URL } from "../constraints/api";

export const post = async (path: string, formData: FormData) => {
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
    credentials: "include",
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "" };
};
