const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: [true, 'Order reference is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Payment amount is required'],
    min: [0, 'Amount cannot be negative'],
  },
  method: {
    type: String,
    enum: {
      values: ['JazzCash Wallet', 'JazzCash Mobile'],
      message: 'Invalid payment method',
    },
    required: [true, 'Payment method is required'],
  },
  transactionId: {
    type: String,
    trim: true,
    unique: true,
    sparse: true,
  },
  status: {
    type: String,
    enum: {
      values: ['Pending', 'Completed', 'Failed', 'Refunded'],
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
paymentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Payment', paymentSchema);