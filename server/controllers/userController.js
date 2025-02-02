const bcrypt = require('bcrypt');
const pool = require('../db');
require('dotenv').config();
const jwtGenerator = require('../utils/jwtGenerator');
const queries = require('../queries/users');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await pool.query(
            queries.getAllUsers,
        );
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
};
const userRegistration = async (req, res) => {
    const {username, password} = req.body;
    try {
        if (!username || !password) {
            return res.status(403).json('логин или пароль остались пустыми');
        }
        if (username.length < 5) {
            return res.status(403).json('логин меньше 5 символов');
        }
        const user = await pool.query(queries.userLogin, [username]);
        if (user.rows.length) {
            return res.status(401).json('Пользователь существует!');
        }
        const salt = await bcrypt.genSalt(5);
        const bcryptPassword = await bcrypt.hash(password, salt);
        const newUser = await pool.query(
            queries.createUser,
            [username, bcryptPassword],
        );
        const {userId, isAdmin = false} = newUser.rows[0];
        const token = jwtGenerator(userId, username, isAdmin);
        return res.json({token});
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Ошибка сервера');
    }
};

const userLogin = async (req, res) => {
    const {username} = req.body;
    try {
        const {rows} = await pool.query(queries.userLogin, [
            username,
        ]);
        if (!rows.length) {
            return res.status(401).json('Пользователь не найден');
        }
        const {userId, isAdmin, userPassword} = rows[0];
        const validPassword = await bcrypt.compare(req.body.password, userPassword);
        if (!validPassword) return res.status(400).send('Неверный пароль');

        const token = jwtGenerator(userId, username, isAdmin);
        return res.json({token});
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Ошибка сервера');
    }
};

const userCheck = async (req, res) => {
    const token = jwtGenerator(req.user.id, req.user.username, req.user.isAdmin);
    return res.json({token});
};

module.exports = {
    userCheck,
    getAllUsers,
    userLogin,
    userRegistration,
};
