const AuthRouter = require("express").Router();
const AuthController = require("../Controller/auth.controller");

AuthRouter.post("/signup", AuthController.Signup);
AuthRouter.post("/login", AuthController.Login);

module.exports = AuthRouter;
