const router = require('express').Router();
const {getAllProducts, createProduct, getProductWithQuery} = require('../controllers/products')

router.get('/', getAllProducts);
router.get('/q', getProductWithQuery);
router.post('/create-product', createProduct);

module.exports = router;