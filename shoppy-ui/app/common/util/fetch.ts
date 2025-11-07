import { getErrorMessage } from "./erros";
import { API_URL } from "@/app/common/constraints/api";
import { cookies } from "next/headers";

// const getHeaders = () => ({
//   Cookies: cookies().toString()
// })

export const getHeaders = async () => {
  const cookieStore = await cookies();
  return {
    Cookie: cookieStore.toString(),
  };
};

export const post = async (path: string, formData: FormData) => {
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await getHeaders()),
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

export const get = async <T>(path: string) => {
  const res = await fetch(`${API_URL}/${path}`, {
    headers: { ...(await getHeaders()) },
  });
  return res.json() as T;
};
 