const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require(path.join(__dirname,'..','controllers','mainController.js'));

router.get('/', mainController.home);
router.get('/crear', mainController.formCrear);
router.post('/crear', mainController.crear);
router.get('/editar/:id', mainController.formEditar);
router.put('/editar/:id', mainController.editar);
router.get('/lista', mainController.lista);
router.post('/lista/filtro', mainController.filtro);
router.delete('/lista/:id', mainController.delete);
router.get('/api',mainController.api)

module.exports = router;