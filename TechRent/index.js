import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = 'mongodb://localhost:27017/rentTechDB';  // Updated URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define Mongoose Schema and Model
const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  description: String,
  images: [String],
  condition: String,
  location: String
});

const Product = mongoose.model('Product', productSchema);

// Route to Save Product Data
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send({ message: 'Product listed successfully!', product });
  } catch (err) {
    res.status(400).send({ error: 'Failed to save product data.' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
