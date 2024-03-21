const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller')

router.get('/', productController.findAll);
router.get('/:product/:id', productController.findOne);
router.post('/', productController.create);
router.patch('/:product/:id', productController.update);
router.delete('/:product/:id', productController.delete);

module.exports = router;