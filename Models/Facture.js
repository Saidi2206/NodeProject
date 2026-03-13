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
                enum: ['Impayées', 'Payee', '1/2', '3/4'],
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
            }
        },
    );
module.exports=Facture;