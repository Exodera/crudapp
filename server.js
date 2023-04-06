 const express = require('express');
 const bodyparser = require('body-parser');
 const morgan = require('morgan');
 const dotenv = require('dotenv');
 
 const app = express();
 
 dotenv.config({path:'config.env'});

//log requests
 app.use(morgan('tiny'));


 //log requests to body-parser
 app.use(bodyparser.urlencoded({extended: true}));

 app.get('/', (req,res)=>{
    res.send("/ of crud app")
 });
 const PORT = process.env.PORT || 3100
 
 app.listen(PORT,()=> console.log(`Server is working on port ${PORT}`));


 const fs = require('fs');

 const path = require('path');
