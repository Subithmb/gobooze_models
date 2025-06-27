const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const paymentSchema = new mongoose.Schema(
  {
    payment_name: {
      type: String,
      required: true,
    },
    payment_method_details:{
     
    },
    added_by: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "User",
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
  "PaymentMethod",
  paymentSchema,
  "payment_methods"
);
