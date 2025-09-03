const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Task = sequelize.define('Task', {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    block_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    task_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'task',
    timestamps: false,
});

module.exports = Task;