const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    name: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
      maxlength: [50, 'Customer name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Customer email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?\d{10,15}$/, 'Invalid phone number format'],
    },
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product reference is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
  }],
  shipping: {
    address: {
      street: { type: String, required: [true, 'Street address is required'], trim: true },
      city: { type: String, required: [true, 'City is required'], trim: true },
      postalCode: { type: String, trim: true },
      country: { type: String, required: [true, 'Country is required'], trim: true },
    },
    method: {
      type: String,
      enum: {
        values: ['Standard', 'Express'],
        message: 'Invalid shipping method. Choose Standard or Express',
      },
      required: [true, 'Shipping method is required'],
    },
    cost: {
      type: Number,
      required: [true, 'Shipping cost is required'],
      min: [0, 'Shipping cost cannot be negative'],
    },
  },
  total: {
    type: Number,
    required: [true, 'Order total is required'],
    min: [0, 'Total cannot be negative'],
  },
  status: {
    type: String,
    enum: {
      values: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      message: 'Invalid status',
    },
    default: 'Pending',
  },
  paymentStatus: {
    type: String,
    enum: {
      values: ['Pending', 'Completed', 'Failed'],
      message: 'Invalid payment status',
    },
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update `updatedAt` timestamp on save
orderSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Order', orderSchema);