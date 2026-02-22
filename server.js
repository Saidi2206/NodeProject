//import de l'express
const express = require('express');
//appel de connect 
require('./config/connect');
//cree app qui a tous les fonc su express
const app = express();

//lancer le server
app.listen (3000,()=>{
    console.log('server work');
})