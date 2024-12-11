const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user")

const app = express();
app.use(express.json());

app.post("/signup", async(req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        res.send("User signed up successfully");
    }catch(e){
        res.status(500).send("SignUp Error: " + e.message);
    }
});

app.get("/user", (req, res)=>{
    const userEmail = req.body.emailId;
    try{
        const user = User.findOne({emailId: userEmail});
        if(user.length === 0){
            res.status(404).send("User not found");
        }else{
            res.send(user);
        }
    }catch(e){
        res.status(400).send("Something went wrong");
    }
})


app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Oops! something went wrong :(")
    }
})
connectDB().then(() => {
    console.log("Database connected successfully...");
    app.listen(3000, ()=>{
        console.log("Server is listening to port 3000...")
    })
}).catch((err)=>{
    console.log("Database can't be connected");
});