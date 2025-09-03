const {  DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Block = sequelize.define('Block', {
    block_id: {
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
    icon:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    block_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'block',
    timestamps: false,
});

module.exports = Block;