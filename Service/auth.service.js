const User = require("../Models/user.model");
const responses = require("../constants/responses");
const { hashedpassword, comparePassword } = require("../utils/auth.helper");

const Signup = async (userdata) => {
  const { email, password } = userdata;
  try {
    const EmailExist = await User.findOne({ email });
    if (EmailExist) {
      return responses.USER_RESPONSE.EMAIL;
    }
    const Hashedpass = await hashedpassword(password);
    const user = await User.create({ email, password: Hashedpass });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
const Login = async (userdata) => {
  const { email, password } = userdata;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return responses.USER_RESPONSE.USER_NOT_FOUND;
    }
    const compare = await comparePassword(password, user.password);
    if (!compare) {
      return responses.USER_RESPONSE.PASSWORD_FAIL;
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { Signup, Login };
