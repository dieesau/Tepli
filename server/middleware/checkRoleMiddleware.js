const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (isadmin) {
    return function (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                res.status(401).json('Пользователь не авторизован');
            }
            const verify = jwt.verify(token, process.env.SECRET_KEY);
            req.user = verify.user;
            if (req.user.isAdmin === !isadmin) {
                return res.status(403).json('Доступ запрещён');
            }
            next();
        } catch (err) {
            return res.status(401).json('Пользователь не авторизован');
        }
    };
};
