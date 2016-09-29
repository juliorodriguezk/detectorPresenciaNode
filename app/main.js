var SERVER_URL = "http://127.0.0.1:2999",
    CLIENTE = {
        tel: "910000000",
        uid: "1"
    },
    socket = null,
    enviarDatos = function() {
        socket.send(CLIENTE);
    },
    destruir = function() {
        socket.destroy();
        document.getElementById('con').style.display = 'inline-block';
        document.getElementById('descon').style.display = 'none';
        document.getElementById('des').style.display = 'none';
    },
    accionConectar = function() {
        console.log("El cliente ha conectado con el server");
        document.getElementById('con').style.display = 'none';
        document.getElementById('descon').style.display = 'inline-block';
        document.getElementById('des').style.display = 'inline-block';
        enviarDatos();
    },
    accionDesconectar = function() {
        console.log("El cliente se ha desconectado del server");
        destruir();
        document.getElementById('con').style.display = 'inline-block';
        document.getElementById('descon').style.display = 'none';
        document.getElementById('des').style.display = 'none';
    },
    accionMenRecibido = function(datos) {
        console.log("El cliente ha Recibido un mensaje desde el server");
    },
    conectar = function() {
        socket = io.connect(SERVER_URL);
        socket.on('connect', accionConectar);
        socket.on('disconnect', accionDesconectar);
        socket.on('message', accionMenRecibido);
    },
    desconectar = function() {
        socket.disconnect();
    };
