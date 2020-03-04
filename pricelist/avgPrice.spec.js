const server =require('../server')
const request = require('supertest')
const db = require('../dbConfig')

describe('avg-price', ()=>{
    it('returns json array of listings', async ()=>{
        const res = await request(server).get('/api/listings')
       .expect('Content-type','application/json; charset=utf-8')
    })
   it('returns one listing', async ()=>{
       const res = await request(server).get('/api/listing/2')
       .expect('Content-type','text/html; charset=utf-8')
   } )
})