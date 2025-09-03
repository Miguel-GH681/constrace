const jwt = require('jsonwebtoken');

const getJWT = ( user_id )=>{
    return new Promise((resolve, reject)=>{
        const payload = { user_id };        
        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: '6h'
        }, (error, token)=>{
            if(error){
                reject('No se pudo generar el JWT');
            } else{
                resolve( token );
            }
        });
    });
}

const validateJWT = (token)=>{
    try {
        const { user_id } = jwt.verify(token, process.env.JWT_KEY);
        return [true, user_id];
    } catch (error) {
        return [false, ''];
    }
}

module.exports = {
    getJWT,
    validateJWT
}