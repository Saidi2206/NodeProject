    //import mongosoe
    const mongoose = require ('mongoose'); 
    //Cree model
        const User = mongoose.model('User',{ 
        Nom :{
            type: String,   required: true  
        }, 
        Prenom  :{
            type: String, required: true
        } ,
        Email  :{
            type: String, required: true
        } ,
        Telephone :{
            type: String,
        }, 
        Mot_de_passe :{
            type: String, required: true
        } ,
        Role: {
            type: String,
            enum: ['agent', 'manager' ,'admin'],
            required: true
        }
    }, 
); 
module.exports = User;