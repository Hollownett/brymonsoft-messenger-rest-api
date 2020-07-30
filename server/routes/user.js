import express from "express";
// controllers
import user from "../controllers/user.js";

const router = express.Router();

router
  .get("/", user.onGetAllUsers)
  .post("/", user.onCreateUser)
  .get("/searchUser/", user.onGetUserByOption)
  .delete("/:id", user.onDeleteUserById);

export default router;
