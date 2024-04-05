

// New

const passport = require('passport');
// const { Userser } = require('../../First_Node/models/models.js');
const {User} = require('../models/models.js');



const home = async (request,response) => {
    try {
        response.send("Home page...");
    } catch(error) {
        console.log("Error in home page...");
    }
} 

// Login page
const login = async (request,response) => {
    try {
        response.send("Login page...");
    } catch(error) {
        console.log("Error in Login page...");
    }
} 

// Register page
const register = async (request,response) => {
    try {

        const user_data = await request.body;
        
        const newUser = new User({
            name: user_data.name,
            email: user_data.email,
            password: user_data.password,
            role: user_data.role
        });

        newUser.save().then(() => {
            console.log("User saved successfully...");
        });

        console.log(request.body);
    } catch(error) {
        console.log("Error in register page...", error);
    }
} 

// Users page
const allUsers = async (request,response) => {
    try {
       
        const alls = await User.find();
        response.json(alls);
    } catch(error) {
        console.log("Error in Users page...");
    }
} 

module.exports = {
    home,
    login,
    register,
    allUsers
}






