import { Router } from "express";

// Controller
import * as userController from "../controllers/userController";

const authRoute = Router();

authRoute.post("/register", userController.register);
authRoute.post("/login", userController.login);

export default authRoute;
