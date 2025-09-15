const { Op } = require("sequelize");
const Message = require('../models/message');

const getMessages = async (req, res) => {
  try {
    const fromId = req.user_id;
    const toId = req.params.id;
    
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { sender_id: fromId, receiver_id: toId },
          { sender_id: toId, receiver_id: fromId },
        ],
      },
      order: [["send_date", "DESC"]],
      limit: 30,
    });

    res.json({
      ok: true,
      msg: messages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el administrador",
    });
  }
};

module.exports = {
    getMessages
}