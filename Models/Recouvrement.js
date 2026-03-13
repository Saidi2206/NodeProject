    const { mongoose } = require("mongoose");
  
  const Recouvrement = new mongoose.model('Recouvrement',{
  
            Numero :{
              type: String, required: true, unique: true
            }, 
            facture: { 
                type: mongoose.Schema.Types.ObjectId, ref: 'Facture', required: true 
            },
            client: {
                 type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true 
            },    
            typeAction: {
                type: String,
                enum: ['appel', 'email', 'courrier', 'visite', 'mise_en_demeure'],
                required: true,
            },
            Date :{
                type: Date, required: true
            },  
            Description: {
                type: String,  
            },
        },
    );
module.exports=Recouvrement;