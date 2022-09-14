const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require(path.join(__dirname,'..','controllers','mainController.js'));

router.get('/', mainController.home);
router.get('/crear', mainController.formCrear);
router.post('/crear', mainController.crear);
router.get('/editar', mainController.formEditar);

module.exports = router;