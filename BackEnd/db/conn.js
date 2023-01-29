const mongoose = require("mongoose")
require('dotenv').config()


mongoose.connect(process.env.MONG_URI).then(() => {
    console.log(`connection is successul`);
}).catch((error) =>{
    console.log(`Error is ${error}`)
})