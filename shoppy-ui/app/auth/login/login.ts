"use server";

import { redirect } from "next/navigation";
// import { post } from "@/app/util/fetch";
import { FormResponse } from "@/app/common/interfaces/form-response.interface";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "@/app/common/constraints/api";
import { getErrorMessage } from "@/app/common/util/erros";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

// export default async function login(_prevState: FormResponse, formData: FormData) {
//   const { error } = await post("auth/login", formData);
//   if (error) {
//     return { error };
//   }
//   setAuthCookie(res);
//   redirect("/");
// };

const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];

    const cookieStore = await cookies(); // 👈 phải await

    cookieStore.set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};

export default async function login(
  _prevState: FormResponse,
  formData: FormData
) {
  const res = await fetch(`${API_URL}/auth/login`, {
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
  await setAuthCookie(res);
  redirect("/");
}
