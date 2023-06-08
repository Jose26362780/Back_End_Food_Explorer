const { Router } = require("express");

const usersRouter = require("./users.routes");
const dishesRouter = require("./dishes");
const sessionsRouter = require("./sessions");
const ordersRouter = require("./orders");
const ordersAdmRouter = require("./orders.admin");
const favoritesRouter = require("./favorites");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/dishes", dishesRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/orders", ordersRouter);
routes.use("/ordersAdm", ordersAdmRouter);
routes.use("/favorites", favoritesRouter);

module.exports = routes;