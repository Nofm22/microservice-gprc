import fs from "fs";
export const createToketSet = async () => {
  const refreshToken = fs.readFileSync("refresh_token.txt", "utf8");
  const resfreshUrl = "https://identity.xero.com/connect/token";
  const token = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");
  const headers = {
    Authorization: `Basic ${token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const data = await fetch(resfreshUrl, {
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    method: "POST",
    headers,
  });
  const formatedData = await data.json();
  fs.writeFileSync("refresh_token.txt", formatedData.refresh_token);
  return formatedData;
};
