require('dotenv').config();
const server = require('./server')

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});

server.get('/',(req,res)=>{
    res.send('Welcome to the African Market Place API')
})
  