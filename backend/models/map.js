const { Schema, default: mongoose } = require("mongoose");

const mapSchema = new Schema({
  group_name: {
    type: String,
  },
  nft_address: {
    type: String,
  },
  holder_addresses: [
    {
      type: String,
    },
  ],
  safe_address: {
    type: String,
  },
  threshold: {
    type: Number,
  },
});

module.exports = mongoose.model("Map", mapSchema);
