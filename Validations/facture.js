const Joi = require("joi");

const Facture = Joi.object({
    
    Numero: Joi.string().required(),
    client: Joi.string().required(),
    Montant: Joi.number().positive().required(),
    Statut: Joi.string().valid('Impayées', 'Déposée', 'Rejetée', 'Encaissée').optional(),
    DateEmission: Joi.date().required(),
    DateEcheance: Joi.date().required(),
    Description: Joi.string().allow('', null)
});

module.exports = Facture;