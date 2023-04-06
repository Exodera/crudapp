 const express = require('express');
 const bodyparser = require('body-parser');
 const morgan = require('morgan');
 const dotenv = require('dotenv');
 const path = require('path');
 
 const app = express();
 
 dotenv.config({path:'config.env'});

//log requests
 app.use(morgan('tiny'));


 //log requests to body-parser
 app.use(bodyparser.urlencoded({extended: true}));

 //Set view engine
 app.set('view engine','ejs');
 
//load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));


//handle requests?
 app.get('/', (req,res)=>{
    res.send("/ of crud app")
 });
 const PORT = process.env.PORT || 3100
 
 app.listen(PORT,()=> console.log(`Server is working on port ${PORT}`));


 const fs = require('fs');

 const path = require('path');
