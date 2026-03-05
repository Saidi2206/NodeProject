//Import de l'express
const express = require('express');
//appele de fonc Router , server.js principal room et la seconde room 
const Router = express.Router();
//Import de user model 
const User = require('../Models/User');


//ancienne méthode Promise
/*
Router.post('/addUser, (req,res)=>{
    data=req.body;
    user= new User(data)
    user.save()
        .then(
        (savedUser)=>{
            res.send(savedUser)
            }
        )
        .catch(
        (err)=>{
            res.send(err)
            }
        )
    });
*/
//Post request ,async et await Lisibilité, Gestion des erreurs (try,catch), Code plus propre.Les deux sont fiables ancienne méthode Promise
Router.post('/Create', async (req,res)=>{
    try{
        data = req.body;
        user = new User(data);
        savedUser = await user.save();
        res.status(200).send(savedUser);
    }catch(error){
        res.send(error)
    }
});

Router.get('/GetAll', async (req, res) => {
    try {
      users = await User.find();
      res.status(200).send(users);
    }catch (error) {
      res.send(error);
    }
});

Router.get('/GetById/:id', async (req, res)=>{
    try{
        myid= req.params.id;
        user= await User.findById({_id:myid});
        res.status(200).send(user)
    }catch(error){
        res.send(error);
    }
});

Router.delete('/Delete/:id', async (req,res)=>{
    try{
        myid= req.params.id;
        deleteUser= await User.findByIdAndDelete({_id:myid});
        res.status(200).send(deleteUser);
    }catch(error){
        res.send(error);
    }
});

Router.put('/Update/:id', async(req,res)=>{
    try{
        myid=req.params.id;
        newdata=req.body;
        user= await User.findOneAndUpdate({_id:myid}, newdata)
        res.send(user)
    }catch(error){
        res.send(error);
    }
});

module.exports = Router;