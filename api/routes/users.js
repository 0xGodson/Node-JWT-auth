const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.status(200).json({
        Name: "Godson"
    });
})

// // Supply details in body 

router.post('/', (req, res) => {
    const username = req.body.Name
    res.status(200).json({
        UserName : username
    });
})

router.delete('/', (req, res) => {
    const username = req.body.Name
    res.status(200).json({
        Delected: username
    });
})

router.put('/', (req, res) => {
    const username = req.body.Name
    res.status(200).json({
        Updated_user: username
    });
})

// Supply details in a url

router.get('/name/:name', (req, res) => {
    res.status(200).json({
        UserName: req.params.name
    });
})

router.put('/name/:name', (req, res) => {
    res.status(200).json({
        Updated_user: req.params.name
    });
})

router.delete('/name/:name', (req, res) => {
    res.status(200).json({
        Deleted_Account: req.params.name
    });
})



module.exports = router
