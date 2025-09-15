const Task = require('../models/task');
const Status = require('../models/status');
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/config');

const getStatus = async (req, res)=>{

    const status = await Status.findAll();

    res.json({
        ok: true,
        msg: status
    });
}

const updateTask = async (req, res)=>{
    try {
        const { hours_worked, status_id, task_id } = req.body;

        await sequelize.query('select update_task(:hours_worked, :status_id, :task_id);',
            {
                replacements: { hours_worked, status_id, task_id },
                type: QueryTypes.SELECT
            }
        );
        
        res.json({
            ok: true,
            msg: "Registro actualizado"
        })
    } catch (error) {
        res.status(500).json({error : error.message}); 
    }
}

module.exports = {
    getStatus,
    updateTask
}