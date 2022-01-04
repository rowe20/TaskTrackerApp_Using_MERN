const express = require('express')
const app = express()
const mongoose = require("mongoose")
const task = require("./modal/taskMdel")
const User = require("./modal/userModel")
const tsk = require("./Router/taskrouter")
const us = require("./Router/userrouter")
app.use(express.json())
const port = 4000

mongoose.connect("mongodb://127.0.0.1:27017/taskapp").then(()=>{console.log("connected ...")})
app.use("/task",tsk)
app.use("/userpage",us)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))