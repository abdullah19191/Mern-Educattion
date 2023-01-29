const express = require('express');
const router = express.Router();
require('../db/conn');
const Enroll = require("../models/registerSchema")

router.get('/',(req,res)=>{
    res.send('Hello Abdullah Anas Hammad')
})

router.post('/enroll', async (req,res)=> {
    const {name,email,password,number,courses,gender} = req.body;
    
    //Validation
    if(!name || !email || !password || !number || !courses || !gender){
        return res.status(400).json({error:'Please Fill In All The Fields'})
    }
    //Email Validation
    Enroll.findOne({email:email}).then((emailExist)=>{
        if(emailExist){
            return res.status(400).json({error:"Email Already Exist Try Enrolling With Different Email"})
        }

       //SAVING TO DATABASE
       const enroll = new Enroll({name:name,email:email,password:password,number:number,courses:courses,gender:gender})
       enroll.save().then(() =>{

        res.status(201).json({message: "Enrollment is SuccessfullY DONE"})
       
    }).catch((error)=>res.status(500).json({error:"Failed to do Enrollment,Please Try Again"}));
    
}).catch((error => {console.log(error);}))

});

module.exports = router;