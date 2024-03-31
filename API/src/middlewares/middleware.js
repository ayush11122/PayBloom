const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: 'No token provided'
        })
    }
    const token = authHeader.split(' ')[1];
    try{
    const decoded = jwt.decode(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    }
    catch(err){
        return res.status(403).json({})
    }
}

module.exports = { 
    authMiddleware
 };