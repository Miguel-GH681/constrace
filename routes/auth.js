const { Router, response } = require('express');
const { postUser, login, renewToken } = require('../controller/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.post('/new', [
    check('full_name', 'El name es obligatorio').not().isEmpty(),
    check('phone', 'El name es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role_id', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], postUser);
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login);
router.get('/renew', validarJWT, renewToken);

module.exports = router;