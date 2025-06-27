const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const searchHistorySchema = new mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    search_names: [
      {
        type: String,
        required: true,
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SearchHistory", searchHistorySchema, "search_history");
