var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/home.html');
    
});

app.get('/sobre-mi', function (req, res) {
    res.send('Hola soy Vavi \n Estudiante DMI');
});

app.get('/contacto', function (req, res) {
    res.send('Instagram: vavi03');
});

app.get('/portafolio', function (req, res) {
    res.send('Mi behance: https://www.behance.net/valra03040d');
});

app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});