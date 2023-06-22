const mongoose = require('mongoose');
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const Dir = path.join(__dirname, "../client")
const port = process.env.PORT || 8000
const multer = require("multer")
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, "./Images")
    },
    filename : (req,file,cb)=>{
        console.log(file.originalname)
        cb(null, Date.now + path.extname(file.originalname))
    }
})
const upload = multer({storage})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.use(express.json())
app.use(express.static(Dir))
app.get("/", ()=>{
    res.send("hello")
  })
app.get("/upload", ()=>{
    res.send("hello")
  })
app.post("/upload", upload.single("image"),(req,res)=>{
    res.send("hello")
  })
  app.listen(port, ()=>{
      console.log("started")
  })