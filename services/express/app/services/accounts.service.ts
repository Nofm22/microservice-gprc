import { xero } from "../app";
import { createToketSet } from "../getRefreshToken";
import jwtDecode from "jwt-decode";
import User from "../models/user";
import { v4 as uuid } from "uuid";
import { comparePassword, hashPassword } from "../common";
export async function createAccount(data) {
  const { firstName, lastName, address, email, password } = data;
  const tokenSet = await createToketSet();
  xero.setTokenSet(tokenSet);
  await xero.updateTenants();

  const activeTenant = xero.tenants[0];

  const decodedIdToken = jwtDecode(tokenSet.id_token);
  const user = await User.findOne({
    where: { email: decodedIdToken.email },
  });
  const recentSession = uuid();

  const userParams = {
    firstName: firstName || decodedIdToken.given_name,
    lastName: lastName || decodedIdToken.family_name,
    address: address ? address : "",
    email: email || decodedIdToken.email,
    xero_userid: decodedIdToken.xero_userid,
    decoded_id_token: decodedIdToken,
    token_set: tokenSet,
    active_tenant: activeTenant,
    session: recentSession,
    password: await hashPassword(password),
  };
  if (user) {
    await user.update(userParams).then((updatedRecord) => {
      console.log(
        `UPDATED user ${JSON.stringify(updatedRecord.email, null, 2)}`
      );
      return updatedRecord;
    });
  } else {
    await User.create(userParams).then((createdRecord) => {
      console.log(
        `CREATED user ${JSON.stringify(createdRecord.email, null, 2)}`
      );
      return createdRecord;
    });
  }
  return userParams;
}

export async function signIn(data) {
  const { email, password } = data;
  const ex_user = await User.findOne({
    where: {
      email,
    },
  });
  if (!ex_user) {
    throw new Error("Người dùng không tồn tại.");
  }
  const { password: encryptedPassword } = ex_user;
  const isValidPassword = await comparePassword(password, encryptedPassword);
  if (!isValidPassword) {
    throw new Error("Mật khẩu không chính xác.");
  }
  return ex_user;
}
