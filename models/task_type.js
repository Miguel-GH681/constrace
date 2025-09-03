const {  DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const TaskType = sequelize.define('Task_Type', {
    task_type_id: {
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
    },
},{
    tableName: 'task_type',
    timestamps: false,
}); 

module.exports = TaskType;