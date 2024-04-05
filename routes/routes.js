
// New

const express = require('express');
const Router = express();
const {home, login, register, allUsers} = require('../controllers/controllers.js');


Router.route('/').get(home);
Router.route('/login').get(login).post(login);
Router.route('/register').get(register).post(register);
Router.route('/users').get(allUsers);

module.exports = Router;



















