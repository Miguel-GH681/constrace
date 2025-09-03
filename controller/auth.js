const { response } = require('express');
const User = require('../models/user_app');
const bcrypt = require('bcryptjs');
const { getJWT } = require('../helpers/jwt');

const postUser = async (req, res = response)=>{
    try {
        const { full_name, phone, email, role_id, password } = req.body;

        const emailExists = await User.findOne({where: {email}});
        console.log({emailExists});
        
        if(emailExists){
            return res.status(400).json({ok: false, msg: 'El correo ya se encuentra registrado'});
        }

        const salt = bcrypt.genSaltSync();
        passwordEncrypted = bcrypt.hashSync( password, salt );
        const user = await User.create({full_name, phone, role_id, email, password: passwordEncrypted});

        const token = await getJWT(user.user_id);

        res.json({
            ok: true,
            msg: user,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false, msg: 'Comuníquese con el administrador'});
    }    
}

const login = async (req, res = response)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user){
            return res.status(404).json({
                ok: false,
                msg: 'email o password incorrecto'
            });
        }

        const validPassword = bcrypt.compareSync( password, user.password );

        if(!validPassword){
            return res.status(404).json({
                ok: false,
                msg: 'email o password incorrecto'
            });
        }


        const token = await getJWT( user.user_id );

        return res.json({
            ok: true,
            msg: user,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false, msg: 'Comuníquese con el administrador'});
    }  
}

const renewToken = async (req, res)=>{
    try {
        const { user_id } = req;
        const token = await getJWT(user_id);        
        const user = await User.findOne({where: {user_id}});
        
        res.json({
            ok: true,
            msg: user,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false, msg: 'Comuníquese con el administrador'});        
    }
}


module.exports = {
    postUser,
    login,
    renewToken
}