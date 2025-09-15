const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Status = sequelize.define('Status', {
    status_id: {
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
    tableName: 'status',
    timestamps: false,
});

module.exports = Status;