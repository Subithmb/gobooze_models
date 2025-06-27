const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const testSubiSchema = new mongoose.Schema(
  {
    subscriptionName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    durationInDays: {
      type: Number,
      required: true,
      min: [1, 'Duration must be at least 1 day'],
    },
    features: [
      {
        type: String,
      }
    ],
    addedBy: {
      type: ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: ObjectId,
      ref: "User",
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

module.exports = mongoose.model("testSubis", testSubiSchema);
