const sequelize = require('../database/config');
const { QueryTypes } = require('sequelize');

const getUsers = async (req, res)=>{
    const user_id = req.user_id;

    const users = await sequelize.query('select * from get_users(:user_id);', {
        replacements: { user_id },
        type: QueryTypes.SELECT
    });
    
    res.json({
        ok: true,
        msg: users
    });
}

module.exports = {
    getUsers
}