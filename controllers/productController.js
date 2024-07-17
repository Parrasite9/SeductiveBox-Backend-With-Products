const { Product, Variation, Image } = require('../models');

// Get all products with their variations and images
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Variation,
          as: 'variations',
          include: [{ model: Image, as: 'images' }]
        },
        { model: Image, as: 'images' }
      ]
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific product by ID with its variations and images
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Variation,
          as: 'variations',
          include: [{ model: Image, as: 'images' }]
        },
        { model: Image, as: 'images' }
      ]
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new product with variations and images
const createProduct = async (req, res) => {
  const { productId, type, name, description, price, material, including, variations, images } = req.body;
  try {
    const product = await Product.create({
      productId,
      type,
      name,
      description,
      price,
      material,
      including
    });

    if (variations && variations.length > 0) {
      const variationsData = variations.map(variation => ({
        ...variation,
        productId: product.id
      }));
      const createdVariations = await Variation.bulkCreate(variationsData);

      if (images && images.length > 0) {
        const imagesData = images.map(image => {
          const variation = createdVariations.find(v => v.size === image.size && v.color === image.color);
          return {
            ...image,
            productId: product.id,
            variationId: variation ? variation.id : null
          };
        });
        await Image.bulkCreate(imagesData);
      }
    }

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product by ID with its variations and images
const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { productId, type, name, description, price, material, including, variations, images } = req.body;
  try {
    const product = await Product.findByPk(id);

    if (product) {
      await product.update({
        productId,
        type,
        name,
        description,
        price,
        material,
        including
      });

      if (variations && variations.length > 0) {
        await Variation.destroy({ where: { productId: id } });

        const variationsData = variations.map(variation => ({
          ...variation,
          productId: id
        }));
        const createdVariations = await Variation.bulkCreate(variationsData);

        if (images && images.length > 0) {
          await Image.destroy({ where: { productId: id } });

          const imagesData = images.map(image => {
            const variation = createdVariations.find(v => v.size === image.size && v.color === image.color);
            return {
              ...image,
              productId: id,
              variationId: variation ? variation.id : null
            };
          });
          await Image.bulkCreate(imagesData);
        }
      }

      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);

    if (product) {
      await product.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById
};
