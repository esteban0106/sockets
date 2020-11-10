var socket = io();

socket.on('connect', function() {
    console.log('Connect to server');
});

socket.on('disconnect', function() {
    console.log('We lost the connect');
});
//sent Information
socket.emit('enviarMensaje', {
    user: 'pedro',
    message: 'go to the museum'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Listen Information
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});