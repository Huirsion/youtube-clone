import express from "express";
import { logout, editUser, deleteUser, seeUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get("/:id(\\d+)", seeUser);

export default userRouter;