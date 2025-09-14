const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Message = sequelize.define('Message',{
    message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sender_id:{
        type: DataTypes.INTEGER,
        ref: 'User',
        require: true
    },
    receiver_id:{
        type: DataTypes.INTEGER,
        ref: 'User',
        require: true,
    },
    message: {
        type: String,
        require: true
    },
    send_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'message',
    timestamps: false
});

module.exports = Message;