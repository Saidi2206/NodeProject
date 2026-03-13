//import de l'express
const express = require('express');
const router = require('./Routes/Router');
//appel de connect 
require('./config/connect');
const { swaggerUi, swaggerSpec } = require("./Config/swagger");
//cree app qui a tous les fonc su express
const app = express();
//lire les donnee en JSON
app.use(express.json());


app.use('/', router);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

module.exports = app


//lancer le server
if (require.main === module) {
    app.listen(3000, () => {
        console.log('server work, on port 3000');
    });
}
