"use server";
// console.log("API_URL value in server action:", process.env.API_URL);

import { API_URL } from "@/app/constraints/api";
import { getErrorMessage } from "@/app/util/erros";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: formData,
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  redirect("/");
}
