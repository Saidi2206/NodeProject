//import de l'express
const express = require('express');
const router = require('./Routes/Router');
//appel de connect 
require('./config/connect');
//cree app qui a tous les fonc su express
const app = express();
//lire les donnee en JSON
app.use(express.json());



app.use('/', router);



//lancer le server
app.listen (3000,()=>{
    console.log('server work, on port 3000');
})
