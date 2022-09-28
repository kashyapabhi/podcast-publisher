//yo perform user db operation
const express = require('express');
const router = express.Router();
const Model = require('../models/PodcastModel');




//routes or endpointes
router.post('/add',(req,res) => {
    const formdata = req.body;
    console.log(formdata)
    new Model(formdata).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        //clint ko jab data nhi milega to aisa error ayegi
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req,res) => {

    Model.find({}).populate('createdBy')
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})
router.get('/getbyemail/:email',(req,res) => {
    console.log(req.params.email);

    Model.findOne({email : req.params.email})
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.post('/authenticate', (req,res) => {
    const formdata = req.body;
    console.log(formdata);
    Model.findOne({email: formdata.email, password : formdata.password})
    .then((result) => {
        //logic for validating user credentials
        //if email and password matches then result will contain their data 
        if(result){
           
            res.json(result);
        }else{
            res.status(401).json({status : 'Login failed'})

            }
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})



// router.get('/code',(req,res) => {
//     res.send('hii i am using vs code');
// })
module.exports = router;