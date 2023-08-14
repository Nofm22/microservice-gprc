import express from "express";

import {
  createAccountController,
  signInController,
} from "../controllers/accounts.controller";
const accountRoute = express.Router();

accountRoute.post("/sign-up", createAccountController);
accountRoute.post("/sign-in", signInController);

export default accountRoute;
