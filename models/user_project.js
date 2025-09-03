const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const UserProject = sequelize.define('User_Project', {
    user_project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'user_project',
    timestamps: false,
});

module.exports = UserProject;