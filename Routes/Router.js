const express = require ('express');
const router = express.Router();

const verifyToken = require('../Middlewares/auth');
const checkRole   = require('../Middlewares/role');

const authRoute = require('../Controllers/authRoutes')
const userRoute = require('../Controllers/User')
const clientRoute = require('../Controllers/client')
const factureRoute = require('../Controllers/Facture')
const PaiementRoute = require('../Controllers/Paiement')
const RecouvrementRoute = require('../Controllers/Recouvrement')


router.use('/authentification', authRoute);

// client 
router.delete('/client/Delete/:id', verifyToken, checkRole(['manager', 'admin']), clientRoute);
router.use('/client', verifyToken, checkRole(['agent', 'manager', 'admin']), clientRoute);


//facture 
router.delete('/facture/Delete/:id', verifyToken, checkRole(['manager', 'admin']), factureRoute);
router.use('/facture', verifyToken, checkRole(['agent', 'manager', 'admin']), factureRoute);


//paiement
router.delete('/paiement/Delete/:id', verifyToken, checkRole(['manager', 'admin']), PaiementRoute);
router.use('/paiement', verifyToken, checkRole(['agent', 'manager', 'admin']), PaiementRoute);

//recouvrement
router.delete('/Recouvrement/Delete/:id', verifyToken, checkRole(['manager', 'admin']), RecouvrementRoute);
router.use('/Recouvrement', verifyToken, checkRole(['agent', 'manager', 'admin']), RecouvrementRoute);


//user
router.delete('/user/Delete/:id', verifyToken, checkRole(['admin']), userRoute);
router.use('/user', verifyToken, checkRole(['manager', 'admin']), userRoute);



module.exports=router;
