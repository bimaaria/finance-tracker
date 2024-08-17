import { prismaClient } from "../application/database";
import { Status } from "../enum/status";
import { ResponseError } from "../error/response.error";
import {
  CreateUserRequest,
  toUserResponse,
  UserResponse,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";

export class UserService {
  static async create(request: CreateUserRequest): Promise<UserResponse> {
    const createRequest = Validation.validate(
      UserValidation.CREATE_USER,
      request
    );

    const isUserExist = await prismaClient.user.count({
      where: {
        username: createRequest.username,
      },
    });

    if (isUserExist !== 0) {
      throw new ResponseError(400, "User already exist");
    }

    createRequest.password = await bcrypt.hash(createRequest.password, 10);

    const newUser = await prismaClient.user.create({
      data: { ...createRequest, status: Status.ACTIVE },
    });

    return toUserResponse(newUser);
  }
}
