const Router = require('express');
const router = Router();
const db = require('../database.js');



function myname(name){
    console.log(name)
}
myname("Waqas")

myname("main")


module.exports = router;
