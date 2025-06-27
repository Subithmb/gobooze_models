const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const inquirySchema = new mongoose.Schema(
  {
    first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: false,
      },
      message: {
        type: String,
        required: false
      }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Inquiry",
  inquirySchema,
  "inquiry"
);
