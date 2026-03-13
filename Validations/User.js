const Joi = require('joi');

const User = Joi.object({
    Nom: Joi.string().min(2).max(50).required(),
    Prenom: Joi.string().min(2).max(50).required(),
    Email: Joi.string().email().required(),
    Telephone: Joi.string().pattern(/^[0-9]{8,11}$/).optional(),
    Mot_de_passe: Joi.string().min(6).required(),
    Role: Joi.string().valid('agent', 'manager', 'admin').required()
});

module.exports = User;