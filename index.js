// Require os module
const os = require('os');
const fs = require('fs');
const express = require('express');
const { createInflate } = require('zlib');
const hostname = 'localhost';
const port = 3540;

var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function getOS() {
    let platform = os.platform();
    switch(platform) {
        case 'win32': console.log("windows platform");
            break;    
        default: console.log("unknown platform");
    }
}

getOS();


app.get('/user/:userId', (req, res) => {
    req.params; // { userId: '42' }
    res.json(req.params);
  });

app.get('/', function (req, res) {
    res.send('hello world')
  })

  app.listen(port, hostname, function() {
    console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});

// Permet de créer un nouveau fichier
function createFile() {
    fs.open('nouveauFichier.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Fichier créé !');
     });
}

function readFile() {
    let data = fs.readFileSync('demo.txt', 'utf8');
    console.log(data)
}

// readFileSync est synchrone ça bloque l'exécution jusqu'a la fin
// readFile est asynchrones fonctionne en arrière plan

