require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");


const app = express();

// middleware configurations
app.use(cors())
app.use(express.json());


// server configuration
app.listen(process.env.PORT, ()=>{
    console.log(`Server starts on ${process.env.PORT}`);
});