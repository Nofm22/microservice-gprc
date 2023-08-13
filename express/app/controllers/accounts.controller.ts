import { createAccount, signIn } from "../services/accounts.service";

export const createAccountController = async (req, res) => {
  try {
    const account = await createAccount(req.body);

    res.status(200).send({
      statusCode: 200,
      data: account,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

export const signInController = async (req, res) => {
  try {
    const account = await signIn(req.body);

    res.status(200).send({
      statusCode: 200,
      data: account,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      statusCode: 400,
      message: error.message,
    });
  }
};
