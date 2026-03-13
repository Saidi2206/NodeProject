//importe supertest
const request = require('supertest');
//importe de server express
const app = require('../server');

// creer un user et retourner son token Date.now() email different 
const getToken = async (role) => {
    const email = `${role}_${Date.now()}@test.com`;
    await request(app)
        .post('/authentification/register')
        .send({
            Nom: 'Test', Prenom: role,
            Email: email,
            Mot_de_passe: 'Test1234',
            Role: role
        });
    const login = await request(app)
        .post('/authentification/login')
        .send({ Email: email, Mot_de_passe: 'Test1234' });
    return login.body.mytoken;
};

//groupe principal contient tout les test 
describe('verifyToken', () => {
    // requete sans token
    test('401 si aucun token', async () => {
        const res = await request(app).get('/client/GetAll');
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Aucun token fourni');
    });
    //requete avec faux token 
    test('401 si token invalide', async () => {
        const res = await request(app)
            .get('/client/GetAll')
            .set('Authorization', 'Bearer tokenfaux123');
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Token invalide');
    });

});

describe('Rôle AGENT', () => {
    let tokenAgent;
    beforeAll(async () => { tokenAgent = await getToken('agent'); });
    //requete avec le token agent.
    test('peut voir les clients ', async () => {
        const res = await request(app)
            .get('/client/GetAll')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(200);
    });

    test('peut voir les factures ', async () => {
        const res = await request(app)
            .get('/facture/GetAll')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(200);
    });

    test('peut voir les paiements', async () => {
        const res = await request(app)
            .get('/paiement/GetAll')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(200);
    });

    test('peut voir les recouvrements ', async () => {
        const res = await request(app)
            .get('/Recouvrement/GetAll')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(200);
    });

    test('ne peut pas supprimer un client ', async () => {
        const res = await request(app)
            .delete('/client/Delete/000000000000000000000000')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(403);
    });

    test('ne peut pas supprimer une facture', async () => {
        const res = await request(app)
            .delete('/facture/Delete/000000000000000000000000')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(403);
    });

    test('ne peut pas gérer les users', async () => {
        const res = await request(app)
            .get('/user/GetAll')
            .set('Authorization', `Bearer ${tokenAgent}`);
        expect(res.statusCode).toBe(403);
    });
});


describe('Rôle MANAGER', () => {
    let tokenManager;
    beforeAll(async () => { tokenManager = await getToken('manager'); });

    test('peut voir les clients', async () => {
        const res = await request(app)
            .get('/client/GetAll')
            .set('Authorization', `Bearer ${tokenManager}`);
        expect(res.statusCode).toBe(200);
    });

    test('peut supprimer un client', async () => {
        const res = await request(app)
            .delete('/client/Delete/000000000000000000000000')
            .set('Authorization', `Bearer ${tokenManager}`);
        expect(res.statusCode).not.toBe(403);
    });

    test('peut gérer les users (GET /user/GetAll)', async () => {
        const res = await request(app)
            .get('/user/GetAll')
            .set('Authorization', `Bearer ${tokenManager}`);
        expect(res.statusCode).toBe(200);
    });

    test('ne peut pas supprimer un user', async () => {
        const res = await request(app)
            .delete('/user/Delete/000000000000000000000000')
            .set('Authorization', `Bearer ${tokenManager}`);
        expect(res.statusCode).toBe(403);
    });

});


describe('Rôle ADMIN', () => {
    let tokenAdmin;
    beforeAll(async () => { tokenAdmin = await getToken('admin'); });

    test('peut tout voir', async () => {
        const clients = await request(app).get('/client/GetAll').set('Authorization', `Bearer ${tokenAdmin}`);
        const factures = await request(app).get('/facture/GetAll').set('Authorization', `Bearer ${tokenAdmin}`);
        const users = await request(app).get('/user/GetAll').set('Authorization', `Bearer ${tokenAdmin}`);
        expect(clients.statusCode).toBe(200);
        expect(factures.statusCode).toBe(200);
        expect(users.statusCode).toBe(200);
    });

    test('peut supprimer un user )', async () => {
        const res = await request(app)
            .delete('/user/Delete/000000000000000000000000')
            .set('Authorization', `Bearer ${tokenAdmin}`);
        expect(res.statusCode).not.toBe(403);
    });

});