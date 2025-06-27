const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderStatusSchema = new mongoose.Schema(
  {
    order_id: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OrderStatus",
  OrderStatusSchema,
  "order_status"
);
