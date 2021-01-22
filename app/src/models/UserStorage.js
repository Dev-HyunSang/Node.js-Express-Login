"use strict";

class UserStorage{
    static #users = {
        id: ['root'],
        password: ['root']
    };

    static getUsers() {
        return this.#users;
    }
};

module.exports = UserStorage;