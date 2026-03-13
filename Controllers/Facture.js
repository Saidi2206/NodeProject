//Import de l'express
const express = require('express');
//appele de fonc Router , server.js principal room et la seconde room 
const Router = express.Router();
//Import de user model 
const Facture = require('../Models/Facture');


//Post request ,async et await Lisibilité, Gestion des erreurs (try,catch), Code plus propre.Les deux sont fiables ancienne méthode Promise
Router.post('/Create', async (req,res)=>{
    try{
        data = req.body;
        facture = new Facture(data);
        savedfacture= await facture.save();
        res.status(200).send(savedfacture);
    }catch(error){
        res.send(error)
    }
});

Router.get('/GetAll', async (req, res) => {
    try {
      factures = await Facture.find();
      res.status(200).send(factures);
    }catch (error) {
      res.send(error);
    }
});

Router.get('/GetById/:id', async (req, res)=>{
    try{
        myid= req.params.id;
        facture= await Facture.findById({_id:myid});
        res.status(200).send(facture)
    }catch(error){
        res.send(error);
    }
});

Router.delete('/Delete/:id', async (req,res)=>{
    try{
        myid= req.params.id;
        deleteFacture= await Facture.findByIdAndDelete({_id:myid});
        res.status(200).send(deleteFacture);
    }catch(error){
        res.send(error);
    }
});

Router.put('/Update/:id', async(req,res)=>{
    try{
        myid=req.params.id;
        newdata=req.body;
        facture= await Facture.findOneAndUpdate({_id:myid}, newdata)
        res.send(facture)
    }catch(error){
        res.send(error);
    }
});

module.exports = Router;