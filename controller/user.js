const User = require('../models/user_app');
const sequelize = require('../database/config');

const getUsers = async (req, res)=>{

    const users = await User.findAll();

    res.json({
        ok: true,
        msg: users
    });
}

module.exports = {
    getUsers
}