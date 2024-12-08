const express = require("express");
const { connectDB } = require("./config/database");

const app = express();

connectDB().then(() => {
    console.log("Database connected successfully...");
    app.listen(3000, ()=>{
        console.log("Server is listening to port 3000...")
    })
}).catch((err)=>{
    console.log("Database can't be connected");
})

app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Oops! something went wrong :(")
    }
})