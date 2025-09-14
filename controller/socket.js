const Message = require('../models/message');
const User = require('../models/user_app');


const userConnected = async (uid)=> {
    const user = await User.findByPk(uid);
    return user;
}

const saveMessage = async (payload)=>{
    try {
        await Message.create(payload);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    userConnected,
    saveMessage
}