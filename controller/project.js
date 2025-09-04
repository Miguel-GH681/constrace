const { QueryTypes } = require('sequelize');
const sequelize = require('../database/config');
const Project = require('../models/project');

require('dotenv').config();

const getProjects = async (req, res) =>{
    try {
        const { user_id } = req.query;
        
        const projects = await sequelize.query('SELECT * FROM get_projects_by_user_id(:user_id);',
            {
                replacements: { user_id },
                type: QueryTypes.SELECT
            }
        );
        
        res.json({
            ok: true,
            msg: projects
        });
    } catch (error) {
        res.status(500).json({error : error.message}); 
    }
}

const getBlocks = async(req, res)=>{
    try {
        const { project_id, block_type_id, parent_id } = req.query;
        
        const projects = await sequelize.query('SELECT * FROM get_blocks_by_type(:project_id, :block_type_id, :parent_id);',
            {
                replacements: { project_id, block_type_id, parent_id: parent_id ?? null },
                type: QueryTypes.SELECT
            }
        );
        
        res.json({
            ok: true,
            msg: projects
        });
    } catch (error) {
        res.status(500).json({error : error.message}); 
    }
};

const getTasks = async(req, res)=>{
    try {
        const { block_id } = req.query;
        
        const tasks = await sequelize.query('SELECT * FROM get_tasks(:block_id);',
            {
                replacements: { block_id },
                type: QueryTypes.SELECT
            }
        );
        
        res.json({
            ok: true,
            msg: tasks
        });
    } catch (error) {
        res.status(500).json({error : error.message}); 
    }
};

const getProjectStatistics = async(req, res)=>{
    try {
        const { statistics_type, project_id, block_id } = req.query;
        let totalTasks;
        let finishedTasks;

        if(statistics_type === 'project'){
            totalTasks = await sequelize.query('select get_total_tasks_by_project(:project_id) as total;',
                {
                    replacements: { project_id },
                    type: QueryTypes.SELECT
                }
            );

            finishedTasks = await sequelize.query('select get_total_tasks_by_project_by_status(:project_id, 2) as total;',
                {
                    replacements: { project_id },
                    type: QueryTypes.SELECT
                }
            );
        } else{
            totalTasks = await sequelize.query('select get_total_tasks_by_project_by_block(:project_id, :block_id) as total;',
                {
                    replacements: { project_id, block_id },
                    type: QueryTypes.SELECT
                }
            );

            finishedTasks = await sequelize.query('select get_total_tasks_by_project_by_block_by_status(:project_id, :block_id, 2) as total;',
                {
                    replacements: { project_id, block_id },
                    type: QueryTypes.SELECT
                }
            );
        }
        
        res.json({
            ok: true,
            msg: {
                'totalTasks': totalTasks[0]['total'],
                'finishedTasks': finishedTasks[0]['total']
            }
        });
    } catch (error) {
        res.status(500).json({error : error.message}); 
    }
};



module.exports = {
    getProjects,
    getBlocks,
    getTasks,
    getProjectStatistics
}