//import du mongosse 
const mongoose = require ('mongoose') 
    //connect a DB
    mongoose.connect('')
        .then(
                ()=>{
                    console.log("Connexion à MongoDB réussie")
                }
            )
            .catch(
                (err)=>{
                    console.error("Erreur de connexion à MongoDB :", err)
                }
            )
module.exports=mongoose;
