module.exports = {
  USER_RESPONSE: {
    EMAIL: "email address already exist",
    SUCCESS: "account created sucessfully",
    SUCCESS_LOGIN: "Login Sucessed",
    USER_NOT_FOUND: "user does not exist",
    PASSWORD_FAIL: "wrong password",
  },
  genericResponse: (status, success, data, error, message) => {
    return {
      status: {
        code: status,
        success: success,
      },
      data: data,
      error: error,
      message: message,
    };
  },
};
