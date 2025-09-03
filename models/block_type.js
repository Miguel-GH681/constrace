const {  DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const BlockType = sequelize.define('Block_Type', {
    block_type_id: {
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
    tableName: 'block_type',
    timestamps: false,
}); 

module.exports = BlockType;