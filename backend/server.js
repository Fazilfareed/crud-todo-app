const cors=require("cors");
require("dotenv").config();

const express = require("express");

const app = express();

console.log(process.env.FRONTEND_URL);

app.use(express.json());
app.use(cors({origin:process.env.FRONTEND_URL}));

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


