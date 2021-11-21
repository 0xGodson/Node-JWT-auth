const express = require('express');
const app = express();
const users = require('./api/routes/users');

app.use(express.static('views'));
app.use(express.json());



app.use('/user', users);

app.listen(3000);