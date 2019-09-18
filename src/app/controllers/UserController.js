import UserModel from '../models/User';

class UserController {
  async list(req, res) {
    const data = await UserModel.getList();
    return res.json(data);
  }
}

export default new UserController();
