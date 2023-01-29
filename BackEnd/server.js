const express = require('express')
const port = process.env.PORT || 3000;
const path = require('path')
const app = express()
require("./db/conn")
const Enroll = require('./models/registerSchema')

//middleware
app.use(express.json())

//we link our router files to make our routing easy
app.use(require('./router/enroll'))

// app.get("/",(req,res)=>{
//     res.send("Hello To Abdullah World's")
// })

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
})