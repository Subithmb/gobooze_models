const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const itemSchema = new mongoose.Schema(
  {
    item_name: {
      type: String,
      ref: "Product",
      required: true,
    },
    collection: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    sub_collection: {
      type: ObjectId,
      ref: "SubCollection",
      required: false,
    },
    item_images: {
      type: [String],
      required: false,
    },

    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    added_by: {
      type: ObjectId,
      ref: "Admin",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "Admin",
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
    suppressReservedKeysWarning: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema, "items");
