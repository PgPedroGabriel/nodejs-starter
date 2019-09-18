class UserModel {
  async getList() {
    this.data = [
      {
        id: 1,
        name: 'Pedro Gabriel',
      },
      {
        id: 2,
        name: 'Pedro Gabriel 2',
      },
    ];
    return this.data;
  }
}

export default new UserModel();
