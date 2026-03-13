//Import de l'express
const express = require('express');
//appele de fonc Router , server.js principal room et la seconde room 
const Router = express.Router();
//Import de user model 
const Paiement = require('../Models/Paiement');


//Post request ,async et await Lisibilité, Gestion des erreurs (try,catch), Code plus propre.Les deux sont fiables ancienne méthode Promise
Router.post('/Create', async (req,res)=>{
    try{
        data = req.body;
        paiement = new Paiement(data);
        savedPaiement= await paiement.save();
        res.status(200).send(savedPaiement);
    }catch(error){
        res.send(error)
    }
});

Router.get('/GetAll', async (req, res) => {
    try {
      paiements = await Paiement.find();
      res.status(200).send(paiements);
    }catch (error) {
      res.send(error);
    }
});

Router.get('/GetById/:id', async (req, res)=>{
    try{
        myid= req.params.id;
        paiement= await Paiement.findById({_id:myid});
        res.status(200).send(paiement)
    }catch(error){
        res.send(error);
    }
});

Router.delete('/Delete/:id', async (req,res)=>{
    try{
        myid= req.params.id;
        deletePaiement = await Paiement.findByIdAndDelete({_id:myid});
        res.status(200).send(deletePaiement);
    }catch(error){
        res.send(error);
    }
});

Router.put('/Update/:id', async(req,res)=>{
    try{
        myid=req.params.id;
        newdata=req.body;
        paiement= await Paiement.findOneAndUpdate({_id:myid}, newdata)
        res.send(paiement)
    }catch(error){
        res.send(error);
    }
});

module.exports = Router;