//import du mongosse 
const mongoose = require ('mongoose') 
//connect a
mongoose.connect('mongodb+srv://ihebsaidi_db_user:ihebsaidi@cluster0.sgs0eyg.mongodb.net/Iheb')
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
