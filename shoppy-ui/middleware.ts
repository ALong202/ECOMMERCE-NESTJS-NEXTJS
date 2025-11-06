import { NextRequest } from "next/server";
import authenticated from "./app/auth/authenticated";

const unauthorizedRoutes = ["/auth/login", "/auth/signup"]; //mảng chứa các route không cần login

export async function middleware(reqest: NextRequest) {
  const auth = await authenticated();


  /**👇

🔹 Tóm gọn logic middleware:

Nếu có token (auth có giá trị) → ✅ Cho phép truy cập (không redirect).

Nếu chưa có token (!auth):

Nếu đang ở các trang cho phép tự do (/auth/login, /auth/signup) → ✅ Cho phép truy cập.

Ngược lại (ở trang khác) → 🚫 Redirect về /auth/login.

*/

  if (
    !auth &&
    !unauthorizedRoutes.some((route) =>
      reqest.nextUrl.pathname.startsWith(route)
    ) // Kiểm tra xem URL hiện tại có bắt đầu bằng /auth/login hoặc /auth/signup không. Nếu có → cho phép truy cập mà không cần token.
    /*request.nextUrl.pathname: là đường dẫn (path) của request hiện tại, ví dụ:
       * /dashboard
       * /auth/login
       * /auth/signup
    */

    /* .some((route) => pathname.startsWith(route))
     * Giải thích ngữ nghĩa:
     * “Kiểm tra xem đường dẫn hiện tại (pathname) có bắt đầu bằng bất kỳ phần tử nào trong mảng unauthorizedRoutes hay không.”
     * 👉 Nếu có ít nhất một phần tử khớp, .some() sẽ trả về true.
     * 👉 Nếu không có phần tử nào khớp, .some() sẽ trả về false.
     */
  ) {
    return Response.redirect(new URL("/auth/login", reqest.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  /**Nghĩa là:
   * “Khớp với mọi URL mà KHÔNG bắt đầu bằng api, _next/static, _next/image, hoặc kết thúc bằng .png.” */
};
