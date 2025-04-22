const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false, // Exclude from queries by default
  },
  addresses: [{
    street: { type: String, required: [true, 'Street is required'], trim: true },
    city: { type: String, required: [true, 'City is required'], trim: true },
    postalCode: { type: String, trim: true },
    country: { type: String, required: [true, 'Country is required'], trim: true },
    isDefault: { type: Boolean, default: false },
  }],
  role: {
    type: String,
    enum: {
      values: ['customer', 'admin'],
      message: 'Invalid role',
    },
    default: 'customer',
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

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  this.updatedAt = Date.now();
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
  console.log(this.password);
};

module.exports = mongoose.model('User', userSchema);