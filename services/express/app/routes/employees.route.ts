import express from "express";

import {
  createEmployeeController,
  getEmployeeController,
} from "../controllers/employess.controller";
const employeeRoute = express.Router();

employeeRoute.post("/", createEmployeeController);
employeeRoute.get("/", getEmployeeController);

export default employeeRoute;
