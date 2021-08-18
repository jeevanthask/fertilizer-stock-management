const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Company = require("../models/company.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/addcompany").post(function (req, res) {
    let company = new Company(req.body);
    company
        .save()
        .then((company) => {
            res.status(200).json({ company: "company added successfully" });
        })
        .catch((err) => {
            res.status(400).send("adding company failed");
        });
});

module.exports = router;
