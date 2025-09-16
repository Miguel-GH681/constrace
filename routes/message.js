const { Router } = require('express');
const { getMessages } = require('../controller/message');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:user_id/:project_id', validarJWT, getMessages);

module.exports = router;