const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  console.log(`nodemailerProject is Listing at http://localhost:${port}`);
});
