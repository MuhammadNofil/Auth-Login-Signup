const express = require("express");

const app = express();

app.use(express.json());

const AuthRouter = require("./Routes/auth.routes");

app.use("/auth/", AuthRouter);

module.exports = app;
