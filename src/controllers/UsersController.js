/*const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const UserRepository = require("../repositories/UserRepository");

class UsersController {
  async create(request, response) {
    const { name, email, password, admin } = request.body

    const userRepository = new UserRepository();

    if (!name || !email || password.length < 6) {
      throw new AppError(
        "Não foi possivel realizar o cadastro, por favor verifique suas informações"
      )
    }

    const checkUserExists = await userRepository.findByEmail(email);

    if (checkUserExists.length === 1) {
      throw new AppError("Este email já está em uso", 401)
    }

    const hashedPassword = await hash(password, 8)

    userRepository.create({ name, email, password: hashedPassword, admin})

    return response.json()
  }
}

module.exports = UsersController
*/


const AppError = require("../utils/AppError");

class UsersController {
   create(request,response) {
    const { name, email,password } = request.body
   {
    if(!name){
      throw new AppError("o nome é obrigatorio");
    }
    response.status(201).json({ name, email, password});
     }
  }
}


module.exports = UsersController;
