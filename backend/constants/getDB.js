const dotenv = require("dotenv");
dotenv.config();

const { Database } = require("@tableland/sdk");
const { Wallet, getDefaultProvider } = require("ethers");

exports.getDB = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new Wallet(privateKey);

  const provider = getDefaultProvider(process.env.ALCHEMY_KEY);

  const signer = wallet.connect(provider);

  const db = new Database({ signer });
  return db;
};
