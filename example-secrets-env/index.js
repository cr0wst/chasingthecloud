// Load .env values
require("dotenv").config();
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.json(process.env);
});

// Start the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
