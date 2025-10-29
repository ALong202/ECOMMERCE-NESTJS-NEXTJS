"use client";

import { Button, Stack, TextField } from "@mui/material";
import Link from "next/link";
import { useFormState } from "react-dom";
import createUser from "./create-user";

export default function Signup() {
  const [state, formAction] = useFormState(createUser, {error: ""});

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2} >
        <TextField name="email" label="Email" variant="outlined" type="email" helperText={state.error} error={!!state.error}/>
        <TextField name="password" label="Password" type="password" variant="outlined" helperText={state.error} error={!!state.error}/>
        <TextField label="Confirm Password" type="password" variant="outlined" />
        <Button type="submit" variant="contained">Sign Up</Button>
        <Link href="/auth/login" className="self-center">
          {"Already have an account? Log In"}
        </Link>
      </Stack>
    </form>
    
  );
}