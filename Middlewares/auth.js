const jwt = require('jsonwebtoken');

const SECRET_KEY = '146045';

const verifyToken = (req, res, next) => {
    //rcuperer le header authorization
    const authHeader = req.headers['authorization'];
    //verifier que le header existe
    if (!authHeader) {
        return res.status(401).json({ message: "Aucun token fourni" });
    }
    //format attendu "Bearer+token" [1] juste le token
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: " Format du token invalide" });
    }
    //verifier le token avec secretkey et sauvegarde les donnes
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Token invalide" });
    }
};

module.exports = verifyToken;