const express = require("express")
const path = require("path")
const app = express()

let port = process.env.PORT || 8080

app.listen(port,()=>{console.log(`Express http server listening on ${port}`)})