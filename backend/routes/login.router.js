const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");

let Admin = require("../models/admin.model");

app.use(cors());
app.use(bodyParser.json());

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized tt request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

router.post("/login", (req, res) => {
  let userData = req.body;

  Admin.findOne(
    {
      username: userData.username,
    },
    (error, user) => {
      if (error) {
        console.log(error);
      } else {
        if (!user) {
          res.status(401).send("Invalid Email");
        } else if (user.password != userData.password) {
          res.status(401).send("Invalid Passwrod");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  );
});

module.exports = router;
