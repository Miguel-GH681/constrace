const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Role = sequelize.define('Role', {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'role',
    timestamps: false,
});

module.exports = Role;