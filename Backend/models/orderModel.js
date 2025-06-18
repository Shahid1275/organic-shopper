// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   items: {
//     type: Array,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   address: {
//     type: Object,
//     required: true,
//   },
//   status: {
//     type: String,
//     required: true,
//     default: "Order placed",
//   },
//   paymentMethod: {
//     type: String,
//     required: true,
//   },
//   payment: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
//   date: {
//     type: Number,
//     required: true,
//   },
// });

// const orderModel =
//   mongoose.models.order || mongoose.model("order", orderSchema);

// export default orderModel;
import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [{
    itemId: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Order Placed", // Default status for each item
    },
  }],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Order Placed", // Overall order status (can be kept for reference)
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  payment: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Number,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
  }, // Added to match the controller's usage of orderId
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;