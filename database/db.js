const mongoose = require('mongoose');
const CONNECTION_STRING = "mongodb+srv://shafqat:shafqat@cluster0.ofgguig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const db = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
        }).then(() => {
            console.log("Database connected successfuly...");
        });
    } catch(error) {
        console.log("Error in database...", error);
    }
}


module.exports = db;