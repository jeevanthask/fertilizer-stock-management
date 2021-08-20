const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Company = require("../models/company.model");

app.use(cors());
app.use(bodyParser.json());

router.route("/getcompanies").get(function (req, res) {
  Company.find(function (err, companies) {
    if (err) {
      console.log(err);
    } else {
      res.json(companies);
    }
  });
});

router.route("/getcompany/:id").get(function (req, res) {
  let id = req.params.id;
  Company.findById(id, function (err, company) {
    res.json(company);
  });
});

module.exports = router;
