const Joi = require("joi");

const Paiement = Joi.object({
    Numero: Joi.string().required(),
    Facture: Joi.string().required(),
    Montant: Joi.number().positive().required(),
    DatePaiement: Joi.date().required(),
    Mode: Joi.string().valid('virement', 'cheque', 'especes', 'autre').default('especes'),
    Description: Joi.string().allow('', null)
});

module.exports = Paiement;