const express = require('express')
const app = express();
const donenv = require('dotenv')
const mongoose = require('mongoose')
const authModel = require('./models/authModel')
const registerUser = require('./routes/register')
const loginUser = require('./routes/login')
donenv.config()

// DB connect
mongoose.connect('mongodb://localhost/node-auth', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => { console.log("Error While Connecting DB")})
mongoose.connection.once('open', () => { console.log("DB connected!")})

app.use(express.static('static'))
app.use(express.json())
app.use('/api/register', registerUser)
app.use('/api/login', loginUser)


app.listen(process.env.PORT || 3000, () => { 
    console.log("server Started")
})