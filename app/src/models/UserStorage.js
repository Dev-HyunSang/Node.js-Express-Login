class UserStorage{
    // #users => USER INFO & ID, Password, Name
    static #users = {
        id: ['root'],
        password: ['root'],
        name: ['HyunSang Park']
    };

    static getUsers() {
        return this.#users;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        return userInfo;
    }
};

module.exports = UserStorage;