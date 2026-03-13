//Import de l'express
const express = require('express');
//appele de fonc Router , server.js principal room et la seconde room 
const Router = express.Router();
//Import de user model 
const Recouvr = require('../Models/Recouvrement');


//Post request ,async et await Lisibilité, Gestion des erreurs (try,catch), Code plus propre.Les deux sont fiables ancienne méthode Promise
Router.post('/Create', async (req,res)=>{
    try{
        data = req.body;
        recouvr = new Recouvr(data);
        savedRecouvr= await recouvr.save();
        res.status(200).send(savedRecouvr);
    }catch(error){
        res.send(error)
    }
});

Router.get('/GetAll', async (req, res) => {
    try {
      recouvrs = await Recouvr.find();
      res.status(200).send(recouvrs);
    }catch (error) {
      res.send(error);
    }
});

Router.get('/GetById/:id', async (req, res)=>{
    try{
        myid= req.params.id;
        recouvr= await Recouvr.findById({_id:myid});
        res.status(200).send(recouvr)
    }catch(error){
        res.send(error);
    }
});

Router.delete('/Delete/:id', async (req,res)=>{
    try{
        myid= req.params.id;
        deleteRecouvr = await Recouvr.findByIdAndDelete({_id:myid});
        res.status(200).send(deleteRecouvr);
    }catch(error){
        res.send(error);
    }
});

Router.put('/Update/:id', async(req,res)=>{
    try{
        myid=req.params.id;
        newdata=req.body;
        recouvr= await Recouvr.findOneAndUpdate({_id:myid}, newdata)
        res.send(recouvr)
    }catch(error){
        res.send(error);
    }
});

module.exports = Router;