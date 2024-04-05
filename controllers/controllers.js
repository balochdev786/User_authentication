

// const {User} = require('../models/models.js');
// const bcrypt = require('bcrypt');
// const salt_rounds = 10;


// // Home page

// const home = async (request,response) => {
//     try {
//         response.send("Welcome to home page...");
//     } catch(error) {
//         console.log("Error in home page...", error);
//     }
// }


// // Login page

// const login = async (request,response) => {
//     try {
//         response.send("Login page...");
//     } catch(error) {
//         console.log("Error in login page...", error);
//     }
// }

// // Register page

// const register = async (request,response) => {
//     try {

//         if(request.method === "GET") {
//             response.send("Register page..");
//         }
//         if(request.method === "POST") {
//             const user_data = request.body;

//             const plainPassword = user_data.password;

//                // Hashing the password
//                bcrypt.hash(plainPassword, salt_rounds, function async (error, hash) {
//                 try {
//                     const new_user = new User({
//                         name: user_data.name,
//                         email: user_data.email,
//                         password: hash,
//                         role: user_data.role
//                     });


//             // Saving new user to databse
//             new_user.save().then(() => {
//                 console.log("User saved to database....");
//             }).catch((error) => {
//                 console.log("An error occured while saving the use to database...", error);
//             });

//                 } catch(error) {
//                     console.log(error);
//                 }
//             }); 

//         }
//     } catch(error) {
//         console.log("Error in register page...", error);
//     }
// }

// // Users data

// const allUsers = async (request,response) => {
//     try {
//         const ID = request.query.id;
//         const name = request.query.name;
//         let user;

//         if(name) {
//             user = await User.findOne({name: name});
//         } else if(ID) {
//             user = await User.findById({_id: ID});
//         }

//        response.json(user);
      
       
//     } catch(error) {
//         console.log("Error in allUsers page...", error);
//     }
// }

// const singleUser = async (request, response) => {
//     try {
//         const user = await User.find();
//         console.log(request.query);
//         response.json(user);
//     } catch(error) {

//     }
// }

// module.exports = {
//     home,
//     login,
//     register,
//     allUsers,
//     singleUser
// }





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






