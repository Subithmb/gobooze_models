const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const CartItemSchema = new mongoose.Schema(
  {
    variant_id: {
      type: ObjectId,
      ref: "Variant",
      required: true,
    },
    cart_id: {
      type: ObjectId,
      ref: "Cart",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartItem", CartItemSchema, "cart_items");
