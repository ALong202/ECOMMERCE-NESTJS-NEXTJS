import {Button, Stack, TextField } from "@mui/material";
import Link from "next/link";



export default function Login() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email"/>
      <TextField label="Password" type="password" variant="outlined"  />
      <Button variant="contained">Login</Button>
      <Link href="/auth/signup" className="self-center">  
        {"Don't have an account? Sign Up"}
      </Link>
    </Stack>
  );
}
