const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const authModel = require('../models/authModel')
const jwt = require('jsonwebtoken')
const {registerValidate} = require('../validate/validate')


router.post('/', async (req, res) =>{
    const {error} = registerValidate(req.body)
    if(error) { 
        res.status(400).send(error.details[0].message) 
    }
    
    else{
        
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
    
        
        const userInput = {
            username: req.body.username,
            password: hashedPass,
        }
        try{
            const checkUserExist = await authModel.findOne({username: userInput.username})
            if(checkUserExist) { 
                res.status(400).json({ message: "User Already Exist"})
            }
            else{
                const addUser = await authModel.create(userInput)
                const authToken = jwt.sign(req.body.username, 'MUSTBETOPSECRET')

                res.json({
                    authToken: authToken
                })
            }
            
            
        }catch(err){
            res.status(400).send("error")
        }
    }

})



module.exports = router