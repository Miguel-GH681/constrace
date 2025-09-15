const { validateJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { userConnected, saveMessage } = require('../controller/socket');

io.on('connection', client => {
    console.log('Cliente conectado');
    const [ valido, user_id ] = validateJWT(client.handshake.headers['x-token']); 

    userConnected(user_id);

    client.join(user_id);
    
    client.on('mensaje-personal', async (payload)=>{        
        await saveMessage( payload );
        io.to(payload.receiver_id).emit('mensaje-personal', payload);
    });

    client.on('disconnect', ()=>{
    });
});
