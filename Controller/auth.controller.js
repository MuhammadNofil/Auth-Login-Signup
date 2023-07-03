const AuthService = require("../Service/auth.service");
const responses = require("../constants/responses");
const { token } = require("../utils/auth.helper");

const Signup = async (req, res) => {
  try {
    const user = await AuthService.Signup(req.body);
    if (user === responses.USER_RESPONSE.EMAIL) {
      const response = responses.genericResponse(
        400,
        false,
        null,
        responses.USER_RESPONSE.EMAIL
      );
      return res.status(response.status.code).json(response);
    }
    user.password=undefined
    const response = responses.genericResponse(
      200,
      true,
      user,
      null,
      responses.USER_RESPONSE.SUCCESS
    );
    res.status(response.status.code).json(response);
  } catch (error) {
    const response = responses.genericResponse(500, false, null, error.message);
    res.status(response.status.code).json(response);
  }
};

const Login = async (req, res) => {
  try {
    const user = await AuthService.Login(req.body);
    if (user === responses.USER_RESPONSE.USER_NOT_FOUND) {
      const response = responses.genericResponse(
        400,
        false,
        null,
        responses.USER_RESPONSE.USER_NOT_FOUND
      );
      return res.status(response.status.code).json(response);
    }
    if (user === responses.USER_RESPONSE.PASSWORD_FAIL) {
      const response = responses.genericResponse(
        400,
        false,
        null,
        responses.USER_RESPONSE.PASSWORD_FAIL
      );
      return res.status(response.status.code).json(response);
    }
    const Jwt = token(user.id, user.email);
    user.password = undefined;
    const response = responses.genericResponse(
      200,
      true,
      { user, Jwt },
      null,
      responses.USER_RESPONSE.SUCCESS_LOGIN
    );
    res.status(response.status.code).json(response);
  } catch (error) {
    const response = responses.genericResponse(500, false, null, error.message);
    res.status(response.status.code).json(response);
  }
};

module.exports = { Signup, Login };
