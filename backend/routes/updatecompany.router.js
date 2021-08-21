const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

let Company = require("../models/company.model");

app.use(cors());
app.use(bodyParser.json());

router.put("/updatecompany/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var company = {
    firstname: req.body.firstname,
    secondname: req.body.secondname,
    email: req.body.email,
    telephone: req.body.telephone,
    address: req.body.address,
  };
  Company.findByIdAndUpdate(
    req.params.id,
    { $set: company },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Comapany Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

module.exports = router;
