const { Router } = require('express');
const { getStatus, updateTask } = require('../controller/task');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/status', validarJWT, getStatus);
router.put('/', validarJWT, updateTask);

module.exports = router;