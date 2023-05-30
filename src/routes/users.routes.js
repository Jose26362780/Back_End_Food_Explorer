const  { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next){
  console.log("Você passou pelo Middleware!");

  if(!request.body.isAdmin) {
    return response.json({ message: "user unauthorizaed"});
  }

  next();

}

const usersController = new UsersController();

usersRoutes.use(myMiddleware);
usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;

