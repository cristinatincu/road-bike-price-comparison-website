const request = require('supertest')
const each = require("jest-each").default;
const app = require('../server')

describe('Price Comparison API', () => {
    it('shows bikes', async () => {
        const res = await request(app).get('/bikes')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('rows')
        expect(res.body.count).toEqual(3)
    })

    it('shows comparisons of a road bike', async () => {
        const res = await request(app).get('/bikes/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('roadBikes')
        expect(res.body.roadBikes).toHaveLength(2)
    })

    // includes 7 tests using parameterization
    describe("queries", () => {
        each([
            ["/bikes?search=gsdfgdf", 0],
            ["/bikes?search=cervelo", 1],
            ["/bikes?offset=2", 1],
            ["/bikes?numItems=2", 2],
            ["/bikes?offset=4&numItems=1", 0],
            ["/bikes?offset=1&numItems=1", 1],
            ["/bikes?offset=1&numItems=1&search=cannon", 0],
        ]).it("when the query is '%s'", async (query, expected) => {
            const res = await request(app).get(query)
            expect(res.statusCode).toEqual(200)
            expect(res.body.rows).toHaveLength(expected)
        });
    });

})