import { UserDTO } from "@/lib/dtos/user.dto";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { ErrorStates } from "../constants";

export const userService = {
  async create(userDTO: UserDTO) {
    const prisma = new PrismaClient();
    const hashedPassword = bcrypt.hashSync(userDTO.password, 10);

    const userExists = await prisma.user.findUnique({
      where: {
        email: userDTO.email,
      },
    });

    if (userExists) throw new Error(ErrorStates.ALREADY_EXISTS);

    const user = await prisma.user.create({
      data: {
        firstName: userDTO.firstName,
        lastName: userDTO.lastName,
        email: userDTO.email,
        password: hashedPassword,
      },
    });

    return user;
  },
};
