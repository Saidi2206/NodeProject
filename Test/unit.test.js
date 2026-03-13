//importe  role euth jwt pour les tester
const checkRole   = require('../Middlewares/role');
const verifyToken = require('../Middlewares/auth');
const jwt = require('jsonwebtoken');

//mockRes fausse reponse express pas de server on cree res 
const mockRes = () => {
    const res = {};
    res.status = (code) => { res.statusCode = code; return res; };
    res.json   = (data)  => { res.body = data; return res; };
    return res;
};

// jest.fn fausse fonction  gere par jtest remplace next pour verifier l'appel expect(mockNext).toHaveBeenCalled()
const mockNext = jest.fn();

describe('checkRole', () => {
    //avant chaque test mockNext ==0 
    beforeEach(() => mockNext.mockClear());

    test('next() appelé si rôle autorisé (agent)', () => {
        const req = { user: { Role: 'agent' } };
        const res = mockRes();
        checkRole(['agent', 'manager', 'admin'])(req, res, mockNext);
        expect(mockNext).toHaveBeenCalled();
    });

    test('next() appelé si rôle autorisé (admin)', () => {
        const req = { user: { Role: 'admin' } };
        const res = mockRes();
        checkRole(['admin'])(req, res, mockNext);
        expect(mockNext).toHaveBeenCalled();
    });

    test('403 si agent essaie une route manager/admin', () => {
        const req = { user: { Role: 'agent' } };
        const res = mockRes();
        checkRole(['manager', 'admin'])(req, res, mockNext);
        expect(mockNext).not.toHaveBeenCalled();
        expect(res.statusCode).toBe(403);
    });

    test('403 si manager essaie une route admin', () => {
        const req = { user: { Role: 'manager' } };
        const res = mockRes();
        checkRole(['admin'])(req, res, mockNext);
        expect(mockNext).not.toHaveBeenCalled();
        expect(res.statusCode).toBe(403);
    });

    test('401 si req.user est absent', () => {
        const req = {}; 
        const res = mockRes();
        checkRole(['agent'])(req, res, mockNext);
        expect(mockNext).not.toHaveBeenCalled();
        expect(res.statusCode).toBe(401);
    });
});


describe('verifyToken', () => {
    const SECRET_KEY = '146045';
    beforeEach(() => mockNext.mockClear());
    
    test('next() appelé avec un token valide', () => {
        const token = jwt.sign({ id: '123', Role: 'agent' }, SECRET_KEY);
        const req = { headers: { authorization: `Bearer ${token}` } };
        const res = mockRes();
        verifyToken(req, res, mockNext);
        expect(mockNext).toHaveBeenCalled();
        expect(req.user).toHaveProperty('Role', 'agent');
    });

    test('req.user contient les bonnes données après vérification', () => {
        const payload = { id: '123', Email: 'test@email.com', Role: 'manager' };
        const token = jwt.sign(payload, SECRET_KEY);
        const req = { headers: { authorization: `Bearer ${token}` } };
        const res = mockRes();
        verifyToken(req, res, mockNext);
        expect(req.user.Role).toBe('manager');
        expect(req.user.Email).toBe('test@email.com');
    });

    test('401 si aucun header authorization', () => {
        const req = { headers: {} };
        const res = mockRes();
        verifyToken(req, res, mockNext);
        expect(mockNext).not.toHaveBeenCalled();
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Aucun token fourni');
    });

    test('401 si token invalide', () => {
        const req = { headers: { authorization: 'Bearer tokenfaux123' } };
        const res = mockRes();
        verifyToken(req, res, mockNext);
        expect(mockNext).not.toHaveBeenCalled();
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Token invalide');
    });
});