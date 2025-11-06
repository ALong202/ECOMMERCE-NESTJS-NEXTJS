import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";

export default async function logout() {
  (await cookies()).delete(AUTHENTICATION_COOKIE);
}
