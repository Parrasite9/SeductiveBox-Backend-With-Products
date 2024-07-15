require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
