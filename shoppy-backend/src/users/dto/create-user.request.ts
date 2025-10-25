import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserRequest {
  // username: string;
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
