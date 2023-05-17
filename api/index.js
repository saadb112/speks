const mongoose = require('mongoose');
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const Dir = path.join(__dirname, "../client")
const port = process.env.PORT || 8000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.use(express.json())
app.use(express.static(Dir))
app.get("/", ()=>{
    res.send("hello")
  })
  app.listen(port, ()=>{
      console.log("started")
  })