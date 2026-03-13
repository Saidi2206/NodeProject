const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Recouvra+ – API de gestion du recouvrement",
            version: "1.0.0",
            description:
                "API REST avec Express.js permettant de gérer les clients, les factures impayées et les actions de recouvrement d'une entreprise.",
            },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
                components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                    // Swagger ajoute "Bearer " automatiquement
                    // Dans le champ Authorize → colle JUSTE le token, sans "Bearer"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    //chemin relatif 
    //apis: ["../Routes/swagger.docs.js"] 
    //chemin absolu fonctionne avec n'import quelle commande lancer 
    //apis: [path.join(__dirname, "../Routes/swagger.docs.js")]
    apis: ["./Controllers/*.js", "./Routes/*.js"]

};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };