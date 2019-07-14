var express = require('express');
var router = express.Router();
const controllers=require('../controllers/listado');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/listado', controllers.listado) 
router.post('/buscar', controllers.buscar)
router.get('/altas', controllers.altas) 
router.get('/editar/:id', controllers.editar) 




module.exports = router;
