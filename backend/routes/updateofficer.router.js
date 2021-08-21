const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

let Officer = require("../models/officer.model");

app.use(cors());
app.use(bodyParser.json());

router.put("/updateofficer/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var officer = {
    firstname: req.body.firstname,
    secondname: req.body.secondname,
    position: req.body.position,
  };
  Officer.findByIdAndUpdate(
    req.params.id,
    { $set: officer },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Officer Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

module.exports = router;
