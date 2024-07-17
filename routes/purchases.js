const express = require('express');
const router = express.Router();
const { createPurchase, getPurchasesByUser } = require('../controllers/purchaseController');

router.post('/create', createPurchase);
router.get('/user/:userId', getPurchasesByUser);

module.exports = router;
