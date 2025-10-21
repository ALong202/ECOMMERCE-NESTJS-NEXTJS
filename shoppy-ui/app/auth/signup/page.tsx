import { Button, Stack, TextField } from "@mui/material";
import Link from "next/link";

export default function Signup() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" type="password" variant="outlined" />
      <TextField label="Confirm Password" type="password" variant="outlined" />
      <Button variant="contained">Sign Up</Button>
      <Link href="/auth/login" className="self-center">
        {"Already have an account? Log In"}
      </Link>
    </Stack>
  );
}