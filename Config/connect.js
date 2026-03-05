//import du mongosse 
const mongoose = require ('mongoose') 
    //connect a DB
    mongoose.connect('mongodb+srv://ihebsaidi:iheb.2023@cluster0.kmsws5t.mongodb.net/NodeProject')
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
