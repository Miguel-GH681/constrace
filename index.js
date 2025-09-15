const express = require('express');
const path = require('path');
const sequelize = require('./database/config');

require('dotenv').config();

sequelize.authenticate().then(()=>{
    
    const app = express();
    app.use(express.json());

    // Node Server
    const server = require('http').createServer(app);
    module.exports.io = require('socket.io')(server);
    require('./sockets/socket');

    app.use( '/api/login', require('./routes/auth'));
    app.use( '/api/user', require('./routes/user'));
    app.use( '/api/message', require('./routes/message'));
    app.use( '/api/project', require('./routes/project'));
    app.use( '/api/task', require('./routes/task'));


    server.listen( process.env.SERVER_PORT, ( err ) => {

        if ( err ) throw new Error(err);

        console.log('Servidor corriendo en puerto', process.env.SERVER_PORT );
    });
}).catch(error =>{
    console.error('Could not connect to the database:', error);
})
