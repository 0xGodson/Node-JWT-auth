const express = require('express');
const app = express();
const router = express.Router();
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authModel = require('../models/authModel')


router.get('/', async (req, res) => {

    const authToken = req.headers['token']

    if(!authToken){
        res.send("Send Token")
    }
    try{
        jwt.verify(authToken, 'MUSTBETOPSECRET', (err, user) => {
            if(err){
                
                res.send('nope')
            }else{res.send("welcome sar")}
            
        })


    }catch (e){
        res.send(e)
    }
    
    // try{
    //     const checkUserExist = await authModel.findOne({username: req.body.username})
    //     if(!checkUserExist) { 
    //         res.status(400).json({ message: "User Not Exist!"})
    //     }
    //     else{
    //         const userDetails = await authModel.findOne({username: req.body.username})
            
    //         const validatePass = await bcrypt.compare(req.body.password, userDetails.password)
    //         const currentUser = req.body.username
    //         if(validatePass){
    //             res.status(200).send(`Welcome ${currentUser}`)
    //         }
    //         else{
    //             res.status(403).send("Invalid creds")
    //         }
    //     }
            
    //     }catch (err){
    //         res.status(400).send(err)
    //     }
    // }
    
    
})



module.exports = router