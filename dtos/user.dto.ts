import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class UserDto {
  @IsString({ message: "First name must be a string" })
  firstName: string;

  @IsString({ message: "Last name must be a string" })
  lastName: string;

  @IsEmail({}, { message: "Invalid email address" })
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: "Password is not strong enough" },
  )
  password: string;
}
