import express from "express";
import accountRoute from "./accounts.route";
import employeeRoute from "./employees.route";
const rootRouter = express.Router();
rootRouter.use("/accounts", accountRoute);
rootRouter.use("/employees", employeeRoute);

export default rootRouter;
