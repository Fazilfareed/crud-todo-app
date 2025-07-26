const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
    try{
        console.log("Database ....................")
        const connectDb = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Database Connected")
    }catch(error){
        console.error("Database connectioin failed.")
    }
};

module.exports = connectToDb;