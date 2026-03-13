const Joi = require("joi");

const Client= Joi.object({
    Nom: Joi.string().min(3).max(50).required(),
    Prenom: Joi.string().min(3).max(50).required(),
    Adresse: Joi.string().min(5).max(100).required(),
    Telephone: Joi.string().pattern(/^[0-9]{8,11}$/).optional()
});

module.exports = Client;