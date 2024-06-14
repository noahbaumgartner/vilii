import { UserDTO } from "@/lib/dtos/user.dto";
import { HttpStatus } from "@/lib/constants";
import { userService } from "@/lib/services/user.service";
import { NextRequest } from "next/server";
import { validate } from "class-validator";
import { getErrorStatesFromValidation } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const jsonBody = await request.json();
  const userDTO = new UserDTO(jsonBody);

  const validationErrors = await validate(userDTO);
  if (validationErrors.length > 0) {
    const states = getErrorStatesFromValidation(validationErrors);
    return Response.json({ states }, { status: HttpStatus.BAD_REQUEST });
  }

  try {
    const user = await userService.create(userDTO);
    return Response.json(user, { status: HttpStatus.CREATED });
  } catch (error: any) {
    return Response.json(
      { states: [error.message] },
      { status: HttpStatus.INTERNAL_SERVER_ERROR },
    );
  }
}
