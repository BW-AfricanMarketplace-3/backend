const express = require('express')
const cors = require('cors')
const server = express()
const helmet = require('helmet')


const authRouter = require('./auth/authRouter')
const avgPriceRouter = require('./pricelist/avgPriceRouter')
const listingRouter = require('./listings/listingsRouter')
const userRouter = require('./users/usersRouter')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/auth', authRouter)
server.use('/api/prices',avgPriceRouter )
server.use('/api/listings',listingRouter)
server.use('/api/users', userRouter)



module.exports = server