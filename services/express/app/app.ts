require("dotenv").config();
import express from "express";
import { Request, Response } from "express";
import { XeroClient } from "xero-node";
import { createToketSet } from "./getRefreshToken";
const session = require("express-session");
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { sequelize } from "./models";
import rootRouter from "./routes";
const client_id: string = process.env.CLIENT_ID;
const client_secret: string = process.env.CLIENT_SECRET;
const redirectUrl: string = process.env.REDIRECT_URI;
const scopes: string =
  "openid profile email accounting.settings accounting.reports.read accounting.journals.read accounting.contacts accounting.attachments accounting.transactions offline_access";

export const xero = new XeroClient({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUris: [redirectUrl],
  scopes: scopes.split(" "),
});

if (!client_id || !client_secret || !redirectUrl) {
  throw Error(
    "Environment Variables not all set - please check your .env file in the project root or create one!"
  );
}

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(
  require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(rootRouter);

const PORT = process.env.PORT || 3000;

// add {force: true} to sync() to reset db
sequelize.sync({ force: true }).then(async () => {
  // sequelize.sync().then(async() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
});

app.get("/employees", async (req: Request, res: Response) => {
  try {
    const data = await createToketSet();
    xero.setTokenSet(data);
    await xero.updateTenants();
    const xeroTenantId = xero.tenants[0].tenantId;
    const ifModifiedSince: Date = new Date("2020-02-06T12:17:43.202-08:00");
    const where = 'Status=="ACTIVE"';
    const order = "LastName ASC";
    const response = await xero.accountingApi.getEmployees(
      xeroTenantId,
      ifModifiedSince,
      where,
      order
    );
    return res.json(response.body);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
