const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/find-paletas', paletasController.findPaletasController);
router.get('/find-paleta/:id', paletasController.findPaletaByIdController);
router.post('/create', paletasController.createPaletaController);
router.put('/update/:id', paletasController.updatePaletaController);
router.delete('/delete/:id', paletasController.deletePaletaController);



module.exports = router;
