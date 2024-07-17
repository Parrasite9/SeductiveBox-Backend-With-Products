const { Purchase, Product, Variation, User } = require('../models');

const createPurchase = async (req, res) => {
  console.log('Received createPurchase request with headers:', req.headers); // Log the request headers
  console.log('Received createPurchase request with body:', req.body); // Log the request body

  const { userId, productId, variationId, purchaseDate } = req.body;

  if (!userId || !productId || !variationId || !purchaseDate) {
    console.log('Missing required fields:', { userId, productId, variationId, purchaseDate }); // Log missing fields
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const purchase = await Purchase.create({
      userId,
      productId,
      variationId,
      purchaseDate
    });
    console.log('Purchase created successfully:', purchase); // Log success message
    res.status(201).json(purchase);
  } catch (error) {
    console.error('Error in createPurchase:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
};

const getPurchasesByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const purchases = await Purchase.findAll({
      where: { userId },
      include: [
        {
          model: Product,
          as: 'product'
        },
        {
          model: Variation,
          as: 'variation'
        }
      ]
    });
    res.status(200).json(purchases);
  } catch (error) {
    console.error('Error in getPurchasesByUser:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPurchase,
  getPurchasesByUser
};
