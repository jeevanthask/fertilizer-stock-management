const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let Admin = require("../models/admin.model");

app.use(cors());
app.use(bodyParser.json());

// router.route("/getadmins").get(function (req, res) {
//   Admin.find(function (err, admins) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(admins);
//     }
//   });
// });

// router.route("/getadmin/:id").get(function (req, res) {
//   let id = req.params.id;
//   Admin.findById(id, function (err, admin) {
//     res.json(admin);
//   });
// });

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
          res.status(200).send(user);
        }
      }
    }
  );
});

module.exports = router;
