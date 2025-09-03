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

module.exports = {
    getProjects,
    getBlocks
}