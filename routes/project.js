const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProjects, getBlocks } = require('../controller/project');

const router = Router();

router.get('/project', validarJWT, getProjects);
router.get('/block', validarJWT, getBlocks);

module.exports = router;