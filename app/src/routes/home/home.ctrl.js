const User = require('../../models/User');
const UserStorage = require('../../models/UserStorage');

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login')
    },
    register: (req, res) => {
        res.render('home/register');
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
    }
}

module.exports = {
    output,
    process
}