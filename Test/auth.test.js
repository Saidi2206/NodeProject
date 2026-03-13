//importe supertest
const request = require('supertest');
//importe de server express
const app = require('../server');

//groupe principal contient tout les test 
describe('🔐 Authentification', () => {
    describe('POST /authentification/register', () => {
        test('créer un utilisateur valide', async () => {
            const res = await request(app)
                .post('/authentification/register')
                .send({
                    Nom: 'Saidi',
                    Prenom: 'Iheb',
                    Email: `register_${Date.now()}@email.com`,
                    Mot_de_passe: 'Test1234',
                    Role: 'agent'
                });
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('_id');
        });

        test('test echouer si Role manquant', async () => {
            const res = await request(app)
                .post('/authentification/register')
                .send({
                    Nom: 'Saidi',
                    Prenom: 'Iheb',
                    Email: 'sdiheb5@email.com',
                    Mot_de_passe: 'Test1234'
                    //pas de role
                });
            expect(res.statusCode).toBe(400);
        });
    });

    describe('POST /authentification/login', () => {

        test('test echouer avec email inexistant', async () => {
            const res = await request(app)
                .post('/authentification/login')
                .send({
                    Email: 'inexistant@email.com',
                    Mot_de_passe: 'Test1234'
                });
            expect(res.statusCode).toBe(404);
        });
    });
});