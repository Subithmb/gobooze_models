const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderTransactionSchema = new mongoose.Schema(
  {
    order_id: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    customer: {
        type: ObjectId,
        ref: "Customer",
        required: false
    },
    store: {
        type: ObjectId,
        ref: "Store",
        required: true
    },
    address: {
        type: ObjectId,
        ref: "Address",
        required: true
    },
    transaction_id: {
      type: String,
      required: false,
    },
    transaction_status: {
      type: String,
      required: false,
      default:"pending"
    },
    amount: {
      type: Number,
      required: false,
      default: 0,
    },
    no_of_items:{
      type: Number,
      required: false,
      default: 0,
    },
    payment_Type:{
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OrderTransaction",
  OrderTransactionSchema,
  "order_transactions"
);
