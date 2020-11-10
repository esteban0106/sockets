const { io } = require('../server')

io.on('connection', (client) => {
    console.log('User connect');

    client.emit('enviarMensaje', {
        user: 'Management',
        message: 'Welcome my dear'
    })

    client.on('disconnect', () => {
        console.log('User disconnect');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (message.user) {
        //     callback({
        //         resp: 'TODO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'OHHH NO!!!!!'
        //     })
        // }
    })
});