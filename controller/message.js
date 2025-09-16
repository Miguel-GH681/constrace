const { Op } = require("sequelize");
const Message = require('../models/message');

const getMessages = async (req, res) => {
  try {
    const fromId = req.user_id;
    const { user_id, project_id } = req.params;
    
    const messages = await Message.findAll({
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              { sender_id: fromId, receiver_id: user_id },
              { sender_id: user_id, receiver_id: fromId },
            ],
          },
          { project_id: project_id }
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