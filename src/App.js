const express = require("express");
const app = express();

app.use("/secretData", (req, res)=>{
    res.send("No secret Data 😂🤣");
})

app.use("/hello", (req, res)=>{
    res.send("Hello Namaste Konnichiva Bonjour Vanakam Namaskara Namaskaram")
})

app.use("/", (req, res) => {
    res.send("Hello from express server");
})

app.listen(3000, ()=>{
    console.log("Server listening to port 3000...")
})