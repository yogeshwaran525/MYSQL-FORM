const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.get(["/"],(req,res)=>{
    res.render('home');
})
router.post('/user', controller.create);
router.get("/adduser",(req,res)=>{
    res.render('adduser');
})

router.post('/home', controller.view);
router.get("/error",(req,res)=>{
    res.render('error');
  
})

router.get('/viewuser', controller.view);
router.get("viewser",(req,res)=>{
    res.render('viewuser');
})

router.get('/:id',controller.delete);
// This pages.js file exports to express
module.exports = router;