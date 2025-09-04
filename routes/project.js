const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProjects, getBlocks, getTasks, getProjectStatistics } = require('../controller/project');

const router = Router();

router.get('/project', validarJWT, getProjects);
router.get('/block', validarJWT, getBlocks);
router.get('/task', validarJWT, getTasks);
router.get('/project-statistics', validarJWT, getProjectStatistics);

module.exports = router;