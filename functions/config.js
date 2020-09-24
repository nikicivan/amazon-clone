const dotenv = require("dotenv");

dotenv.config();

const config = process.env.SECRET_KEY;

module.exports = config;
