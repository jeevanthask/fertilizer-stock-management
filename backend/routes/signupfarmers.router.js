const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Book = require("../models/addbook.model");

app.use(cors());
app.use(bodyParser.json());

router.route("/addbook").post(function (req, res) {
  let book = new Book(req.body);
  book
    .save()
    .then((book) => {
      res.status(200).json({ book: "book added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding book failed");
    });
});

module.exports = router;
