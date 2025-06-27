const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const productImagesSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    product_id: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },

    added_by: {
      type: ObjectId,
      ref: "Store",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "Store",
      required: false,
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

module.exports = mongoose.model(
  "ProductImage",
  productImagesSchema,
  "product_images"
);
