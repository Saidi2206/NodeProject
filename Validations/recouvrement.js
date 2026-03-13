const Joi = require("joi");

const Recouvrement = Joi.object({
    Numero: Joi.string().required(),
    facture: Joi.string().required(),
    client: Joi.string().required(),
    typeAction: Joi.string().valid('appel', 'email', 'courrier', 'visite', 'mise_en_demeure').required(),
    Date: Joi.date().required(),
    Description: Joi.string().allow('', null)
});

module.exports = Recouvrement;