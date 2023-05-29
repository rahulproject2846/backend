const jwt = require('jsonwebtoken');
module.exports.authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split('Bearer ')[1]
    if (token !== 'null') {
        const deCodeToken = await jwt.verify(token, process.env.SECRET);
        req.myId = deCodeToken.id;
        next();
    } else {
        res.status(400).json({
            error: {
                errorMessage: ['please login']
            }
        });
    }
}