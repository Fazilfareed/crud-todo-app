

const express = require("express");

const app = express();


const routes=require("./routes");
app.use("/api",routes);

const connectDB = require("./connectDb");



const port=5000;


const startServer = async() =>{
    await connectDB();
    app.listen(port, ()=> {
        console.log(`Server is listening on http://localhost:${port}`)
    });
};

startServer();


