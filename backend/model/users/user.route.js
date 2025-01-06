import express from "express";
import { userAuth } from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/admin", userAuth);

export default userRouter;
