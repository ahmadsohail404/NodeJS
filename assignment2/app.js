const express = require("express")

const app = express()

app.use("/users", (req, res, next) => {
    console.log("user route");
    res.send("<h1>Hello from user route</h1>")
})

app.use("/", (req, res, next) => {
    console.log("root");
    res.send("<p>This is the root</p>")
})

app.listen(3000)