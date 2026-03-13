//Import de l'express
const express = require('express');
//appele de fonc Router , server.js principal room et la seconde room 
const Router = express.Router();
//Import de user model 
const User = require('../Models/User');
//Import bcrypt pour crypter le mdp
const bcrypt = require('bcrypt');
//import jsonwebtoken
const jwt = require('jsonwebtoken');


//hashSync crypte le mdp , salt random string length 10 pour faire Hash
Router.post('/register', async (req,res)=>{
    data = req.body;
    user = new User(data);
    salt = bcrypt.genSaltSync(10); 
    cryptedMdp = await bcrypt.hashSync(data.Mot_de_passe, salt);
    user.Mot_de_passe = cryptedMdp;
    user.save()
        .then(
            (saved)=>{
                res.status(200).send(saved)
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err)
            }
         )
})
// test si le mail correct  bcrypt pour compare mdp envoyee avec mdp dans la base cree le token avec jwt sign paylaod les donner qu'on veut mettre et secret key  
Router.post('/login', async (req , res)=>{
    data = req.body;
    user = await User.findOne({Email: data.Email})
    if(!user){
        res.status(404).send('Mot de Passe Invalid')
    }else {
        validPas = bcrypt.compare(data.Mot_de_passe, user.Mot_de_passe)
        if(!validPas){
            res.status(401).send('Email or Mot de Passe Invalid')
        }else{
            payload = {
                id : user._id,
                Email : user.Email,
                Role : user.Role
            }
            token = jwt.sign(payload, '146045' )
            res.status(200).send({message: 'Login successful', mytoken : token})
        }
    }
})

module.exports = Router; 