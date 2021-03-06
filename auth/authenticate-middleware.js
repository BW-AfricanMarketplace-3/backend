const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
    if(token){
       jwt.verify(token,process.env.JWT_SECRET || 'thisonetimeatbandcamp', (err, decodedToken)=>{
           if(err){
            res.status(401).json({ message:'Invalid Token'})
           }else{
               req.user = decodedToken;
               next()
           }
       })
    }else{
      res.status(401).json({ access: 'Access denied.' });
    }
  
};