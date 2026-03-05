const express = require ('express');
const router = express.Router();

const userRoute = require('../Controllers/User')
const authRoute = require('../Controllers/authRoutes')




router.use('/user', userRoute);
router.use('/authentification', authRoute);

module.exports=router;
