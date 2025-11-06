"use client";

import { ThemeProvider} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import darkTheme from "./dark.theme";
import { ReactElement } from "react";
import { AuthContext } from "./auth/auth-context";



interface ProvidersProps {
  children: ReactElement[];
  authenticated: boolean;
}
//Bọc toàn bộ app trong AuthContext.
// Lưu authenticated boolean vào Context. 
// Để tất cả component con (client side) có thể dùng useContext(AuthContext).


export default function Providers({ children, authenticated }: ProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={authenticated}>{children}</AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>    
  );
}