require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

// controller
const {signUp, signIn} = require("./controllers/authController");

const app = express();

// middleware configurations
app.use(cors());
app.use(express.json());

// routers
app.post("/signup", signUp);
app.post("/signin", signIn);

// error handling configurations
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

// server configuration
app.listen(process.env.PORT, ()=>{
    console.log(`Server starts on ${process.env.PORT}`);
});