const express = require("express")

const app = express()

app.use("/add", (req, res, next) => {
    console.log("In another middleware");
    res.send("<h1>Hello from routed express</h1>")
})

app.use("/", (req, res, next) => {
    console.log("In another middleware");
    res.send("<h1>Hello from express</h1>")
})

app.listen(3000)
// const server = http.createServer(app)
// server.listen(3000)