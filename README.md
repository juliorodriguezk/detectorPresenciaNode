# detectorPresenciaNode
Implementación de un detector de presencia parte cliente y servidor usando nodejs y socketio


## Server
- Se crea un paquete de node
```
npm init -y
```
- Instalar express y socket.io
```
npm install --save express
npm install --save socket.io
```

- Crear un archivo server/main.js e inicializar lo necesario
```
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
```
###Esperar por las conexiones
###Tratar el socket dentro de la conexión
###El socket se identifica por el socket.id

- Crear la parte cliente en app/
###Usar los eventos de conexión y recepcion de mensajes
###Crear el socket y destruirlo correctamente
