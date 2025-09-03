const {  DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Project = sequelize.define('Project', {
    project_id: {
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
    tableName: 'project',
    timestamps: false,
});

module.exports = Project;