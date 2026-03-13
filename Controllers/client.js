//Import de l'express
const express = require('express');
//appele de fonc Router , server.js principal room et la seconde room 
const Router = express.Router();
//Import de user model 
const Client = require('../Models/Client');


//Post request ,async et await Lisibilité, Gestion des erreurs (try,catch), Code plus propre.Les deux sont fiables ancienne méthode Promise
Router.post('/Create', async (req,res)=>{
    try{
        data = req.body;
        client = new Client(data);
        savedclient= await client.save();
        res.status(200).send(savedclient);
    }catch(error){
        res.send(error)
    }
});

Router.get('/GetAll', async (req, res) => {
    try {
      clients = await Client.find();
      res.status(200).send(clients);
    }catch (error) {
      res.send(error);
    }
});

Router.get('/GetById/:id', async (req, res)=>{
    try{
        myid= req.params.id;
        client= await Client.findById({_id:myid});
        res.status(200).send(client)
    }catch(error){
        res.send(error);
    }
});

Router.delete('/Delete/:id', async (req,res)=>{
    try{
        myid= req.params.id;
        deleteClient= await Client.findByIdAndDelete({_id:myid});
        res.status(200).send(deleteClient);
    }catch(error){
        res.send(error);
    }
});

Router.put('/Update/:id', async(req,res)=>{
    try{
        myid=req.params.id;
        newdata=req.body;
        client= await Client.findOneAndUpdate({_id:myid}, newdata)
        res.send(client)
    }catch(error){
        res.send(error);
    }
});

module.exports = Router;