var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var clientesConectados = {};
server.listen(2999, function() {
    console.log('Servidor corriendo en http://localhost:2999');
});

io.on('connection', function(socket) {
    console.log('El cliente se ha conectado el id de su socket es :: ' + socket.id);
    socket.emit('connect', "Preparado para recibir datos");
    socket.on('disconnect', function() {
        console.log('El cliente cuyo socket es: ' + socket.id + ' se ha desconectado');
        delete clientesConectados[socket.id];
    }).on('message', function(data) {
        console.log("Recibidos datos de cliente conectado con socket" + socket.id);
        console.log(data);
        clientesConectados[socket.id] = data;
    });
});
