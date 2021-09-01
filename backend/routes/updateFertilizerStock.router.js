const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

let FertilizerStock = require("../models/fertilizerStock.model");

app.use(cors());
app.use(bodyParser.json());

router.put("/updatefertilizerstock/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var fertilizer = {
    name: req.body.name,
    producttype: req.body.producttype,
    quantity: req.body.quantity,
  };
  FertilizerStock.findByIdAndUpdate(
    req.params.id,
    { $set: fertilizer },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Fertilizer Stock Update :" +
            JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

module.exports = router;
