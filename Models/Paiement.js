const { mongoose } = require("mongoose");

    const Paiement = new mongoose.model('Paiement',{
        
            Numero :{
                type: String, required: true, unique: true
            }, 
            Facture: { 
                type: mongoose.Schema.Types.ObjectId, ref: 'Facture', required: true 
            },
            Montant  :{
                type: Number, required: true
            } ,
            DatePaiement :{
                type: Date, required: true
            },
            Mode  :{
                type: String,
                enum: ['virement', 'cheque', 'especes', 'autre'],
                default: 'especes',
            } ,

            Description: {
                type: String,  
            }
        },
    );
module.exports=Paiement;