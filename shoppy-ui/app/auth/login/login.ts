"use server";


import { redirect } from "next/navigation";
import { post } from "@/app/util/fetch";
import { FormError } from "@/app/common/form-error.interface";
import { getErrorMessage } from "@/app/util/erros";
import { API_URL } from "@/app/constraints/api";

export default async function login(_prevState: FormError, formData: FormData) {
  const { error } = await post("auth/login", formData);
  if (error) {
    return { error };
  }
  redirect("/");
};

// export default async function login(_prevState: FormError, formData: FormData) {
//   const res = await fetch(`${API_URL}/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(Object.fromEntries(formData)),
//       credentials: "include",
//     });
//     const parsedRes = await res.json();
//     if (!res.ok) {
//       return { error: getErrorMessage(parsedRes) };
//     }
//     redirect("/");
//   };
  