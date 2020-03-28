const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async () => {
        await connection.destroy()
    });
    it('Create new ONG', async () => {
        const res = await request(app).post('/ong/create').send({
            name: "test ong",
            email: "aswews@gmail",
            whats: "67waea7777667",
            city: "areaewaver",
            uf: "sc"
        });
        console.log(res.body);
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);


    })
})