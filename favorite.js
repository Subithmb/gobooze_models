const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const FavoriteSchema = new mongoose.Schema(
  {
    variant_id: {
      type: ObjectId,
      ref: "Variant",
      required: true,
    },
    user_id: {
      type: ObjectId,
      ref: "User",
      required: true,
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

module.exports = mongoose.model("Favorite", FavoriteSchema, "favorites");
