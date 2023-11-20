import { Router } from "express";
import UserController from "../controller/UserController"

const UserRouter = Router();

UserRouter.get("/users", UserController.listUsers);

UserRouter.post("/user", UserController.createUser);

export default UserRouter;