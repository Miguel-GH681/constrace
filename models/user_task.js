const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const UserTask = sequelize.define('User_Task', {
    user_task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'user_task',
    timestamps: false,
});

module.exports = UserTask;