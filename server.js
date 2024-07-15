require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const subscriptionRoutes = require('./routes/subscriptions');

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/subscriptions', subscriptionRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

// Test Database Connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
