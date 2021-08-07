const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`app is listening in port ${PORT} ...`));
