var express = require('express');
var router = express.Router();
const controllers=require('../controllers/apicrud');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/listado', controllers.listado) 
router.get('/buscar/:busqueda', controllers.buscar)
router.post('/crear', controllers.crear)
router.delete('/borrar/:borrar', controllers.borrar)
router.put('/modificar/:modificar', controllers.modificar)
router.get('/listado2', controllers.listado2)

module.exports = router;