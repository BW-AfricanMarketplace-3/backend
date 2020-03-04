const server =require('./server')
const request = require('supertest')

describe('GET /', ()=>{
    
    it('returns an array of listings in json',()=>{
        return request(server).get('/api/listings/')
        .expect('Content-type','application/json; charset=utf-8')
    })
})