//une fonction checkRole agent, admin, manger
const checkRole = (rolesAutorises) => {
    return (req, res, next) => {
        //verifier le Token
        if (!req.user) {
            return res.status(401).json({ message: "utilisateur non authentifie" });
        }
        //verifier le rôle si  est autorise
        if (!rolesAutorises.includes(req.user.Role)) {
            return res.status(403).json({
                message: `rôle '${req.user.Role}' non autorise pour cette action`
            });
        }
        next();
    };
};

module.exports = checkRole;