const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Shipping method name is required'],
    trim: true,
    enum: {
      values: ['Standard', 'Express'],
      message: 'Invalid shipping method. Choose Standard or Express',
    },
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  cost: {
    type: Number,
    required: [true, 'Shipping cost is required'],
    min: [0, 'Shipping cost cannot be negative'],
  },
  estimatedDays: {
    type: Number,
    required: [true, 'Estimated delivery days is required'],
    min: [1, 'Estimated days must be at least 1'],
  },
  isActive: {
    type: Boolean,
    default: true,
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
shippingSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Shipping', shippingSchema);