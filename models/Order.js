const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  tax: Number,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
