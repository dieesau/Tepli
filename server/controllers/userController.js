const {query} = require('../db');
require('dotenv').config();
const jwtGenerator = require('../utils/jwtGenerator');
const queries = require('../queries/users');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await query(
      queries.getAllUsers,
    );
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const userLogin = async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await query(queries.userLogin, [
      username,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json('Пользователь не найден');
    }
    const {userId, isAdmin, userPassword} = user.rows[0];
    const validPassword = password === userPassword;
    if (!validPassword) {
      return res.status(401).json('Неправильный пароль');
    }
    const token = jwtGenerator(userId, username, isAdmin);

    return res.json({token});
  } catch (err) {
    console.error(err.message);
  }
};

const userCheck = async (req, res, next) => {
  const token = jwtGenerator(req.user.id, req.user.username, req.user.isadmin);
  return res.json({token});
};

module.exports = {
  userCheck,
  getAllUsers,
  userLogin,
};
