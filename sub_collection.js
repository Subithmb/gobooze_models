const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const subCollectionSchema = new mongoose.Schema(
  {
    collection_id: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    sub_collection_name: {
      type: String,
      required: true,
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

module.exports = mongoose.model(
  "SubCollection",
  subCollectionSchema,
  "sub_categories"
);
