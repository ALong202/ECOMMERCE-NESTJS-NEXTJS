"use server";

import { API_URL } from "@/app/constraints/api";
import { getErrorMessage } from "@/app/util/erros";
import { redirect } from "next/navigation";

export default async function loginUser(_prevState: any, formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  }
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawData),
    credentials: "include",
  });

  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  redirect("/");
}
