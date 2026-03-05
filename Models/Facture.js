const { mongoose } = require("mongoose");

    const Facture = new mongoose.model('Facture',{

            Numero :{
                type: String, required: true, unique: true
            }, 
            client: { 
                type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true 
            },
            Montant  :{
                type: Number, required: true
            } ,
            Statut  :{
                type: String,
                enum: ['Impayées ', 'Déposée ', 'Rejetée ', 'Encaissée '],
                default: 'Déposée',
            } ,
            DateEmission :{
                type: Date, required: true
            },  
            DateEcheance :{
                type: Date, required: true
            } ,
            Description: {
                type: String,  
            },
            CreePar: {
                type: mongoose.Schema.Types.ObjectId, ref: 'User' 
            }
        },
    );
module.exports=Facture;