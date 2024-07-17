const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProductById);  // Ensure this line is correct
router.delete('/:id', deleteProductById);

module.exports = router;
