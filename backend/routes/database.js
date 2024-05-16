const express = require("express");

const {
  createTableController,
  createNewMap,
  addNewHolder,
  addSafeAddress,
  getAllMapsFromNft,
  getAllNfts,
} = require("../controllers/database");

const app = express.Router();

app.get("/create-table", createTableController);
app.post("/create-map", createNewMap);
app.post("/new-holder", addNewHolder);
app.post("/safe-address", addSafeAddress);
app.get("/all/:nft_address", getAllMapsFromNft);
app.get("/nft", getAllNfts);

module.exports = app;
