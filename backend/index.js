const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbRoutes = require("./routes/database");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(dbRoutes);

mongoose.connect(process.env.MONGO_URI);
app.listen(8000, () => {
  console.log("Server started");
});
