import { NextFunction, Request, Response } from "express";
import { CreateUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";

export class UserController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.create(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
