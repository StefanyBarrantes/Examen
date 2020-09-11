const express = require('express')
const fs = require('fs')
const router = express.Router()

// routes
router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Bienvenidos'
    });
});

// routes
router.get('/expedientes', (req, res) => {
    res.render('expedientes.html', {
        title: 'Crear Expediente'
    });
});


// routes
router.get('/citas', (req, res) => {
    res.render('citas.html', {
        title: 'Crear Cita'
    });
    
});

router.post('/guardar-exp', (req, res) => {
    fs.appendFile(
        "expedientes.txt", JSON.stringify(req.body) , function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File saved successfully!");
    })
}) 

router.post('/guardar-cita', (req, res) => {
    fs.appendFile("citas.txt", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File saved successfully!");
    });
})

module.exports = router;