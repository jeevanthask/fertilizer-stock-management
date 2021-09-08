const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/FertilizerDB", {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("mongodb connection established successfully");
});

app.use("/Dashboard/admin", require("./routes/signupfarmers.router"));
app.use("/Dashboard/admin", require("./routes/getfarmers.router"));
app.use("/Dashboard/admin", require("./routes/deletefarmer.router"));
app.use("/Dashboard/admin", require("./routes/updatefarmer.router"));

app.use("/Dashboard/admin", require("./routes/addfertilizer.router"));
app.use("/Dashboard/admin", require("./routes/getfertilizers.router"));
app.use("/Dashboard/admin", require("./routes/deletefertilizer.router"));
app.use("/Dashboard/admin", require("./routes/updatefertilizer.router"));

app.use("/Dashboard/admin", require("./routes/addofficer.router"));
app.use("/Dashboard/admin", require("./routes/getofficers.router"));
app.use("/Dashboard/admin", require("./routes/deleteofficer.router"));
app.use("/Dashboard/admin", require("./routes/updateofficer.router"));

app.use("/Dashboard/admin", require("./routes/addcompany.router"));
app.use("/Dashboard/admin", require("./routes/getcompanies.router"));
app.use("/Dashboard/admin", require("./routes/deletecompany.router"));
app.use("/Dashboard/admin", require("./routes/updatecompany.router"));

app.use("/Dashboard/admin", require("./routes/addFertilizerStock.router"));
app.use("/Dashboard/admin", require("./routes/getFertilizerStock.router"));
app.use("/Dashboard/admin", require("./routes/updateFertilizerStock.router"));
app.use("/Dashboard/admin", require("./routes/deleteFertilizerStock.router"));

app.use("/Dashboard/admin", require("./routes/login.router"));

app.listen(PORT, () => console.log(`app is listening in port ${PORT} ...`));
