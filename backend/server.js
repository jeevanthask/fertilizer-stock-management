const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:3000", {
//   useNewUrlParser: true,
// });

mongoose.connect("mongodb://localhost:3000", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("mongodb connection established successfully");
});

app.use("/Dashboard/addfarmer", require("./routes/signupfarmers.router"));

app.listen(PORT, () => console.log(`app is listening in port ${PORT} ...`));
