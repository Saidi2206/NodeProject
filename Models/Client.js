    const mongoose = require ('mongoose'); 

        const Client = mongoose.model('Client',{ 
        Nom :{
            type: String,   required: true  
        }, 
        Prenom  :{
            type: String, required: true
        } ,
        Adresse  :{
            type: String, required: true
        } ,
        Telephone :{
            type: String,
        }, 
    }, 
); 
module.exports = Client;