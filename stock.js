const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const inventorySchema = new mongoose.Schema(
  {
    store_id: {
      type: ObjectId,
      ref: "Store",
      required: true,
    },
    product_id: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    category_id: {
      type: ObjectId,
      ref: "category",
      required: true,
    },
    sub_category_id: {
      type: ObjectId,
      ref: "subCategory",
      required: true
    },
    number_of_products: {
      type: Number,
      default: 0,
      required: true
    },
    minimum_qty: {
      type: Number,
      default: 0,
      required: true
    },
    reason_for_inventory: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", inventorySchema, "stocks");
