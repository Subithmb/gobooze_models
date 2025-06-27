const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderStatusSchema = new mongoose.Schema(
  {
    order_id: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    delivery_user: {
      type: ObjectId,
      ref: "Partner", 
      required: false,
      default: null,
    },
    delivery_status: {
      type: String,
      required: true,
      enum: [
        "pending",
        "accepted",
        "rejected",
        "delivered",
        "reached",
        "on-the-way",
        "cancelled",
      ],
      default: "pending",
    },
    store_id: {
      type: ObjectId,
      required: false,
      ref: "Store",
    },
    location: {
      lat: {
        type: Number,
        required: false,
      },
      lng: {
        type: Number,
        required: false,
      },
    },
    delivery_rating: {
      type: Number,
      required: false,
    },
    delivery_review: {
      type: String,
      required: false,
    },
    review_by: {
      type: ObjectId,
      required: false,
      ref: "User",
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
  "OrderDelivery",
  OrderStatusSchema,
  "order_deliveries"
);
