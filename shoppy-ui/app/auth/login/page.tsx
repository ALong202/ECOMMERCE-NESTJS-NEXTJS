"use client";
import {Button, Stack, TextField } from "@mui/material";
import Link from "next/link";
import { useFormState } from "react-dom";
import loginUser from "./login-user";


export default function Login() {
  const [state, formAction] = useFormState(loginUser, {error: ""});

  return (
    <form className="w-full max-w-xs" action={formAction}>
      <Stack spacing={2}>
      <TextField name="email" label="Email" variant="outlined" type="email" helperText={state.error} error={!!state.error}/>
      <TextField name="password" label="Password" type="password" variant="outlined"  helperText={state.error} error={!!state.error}/>
      <Button type="submit" variant="contained">Login</Button>
      <Link href="/auth/signup" className="self-center">  
        {"Don't have an account? Sign Up"}
      </Link>
    </Stack>

    </form>

  );
}
