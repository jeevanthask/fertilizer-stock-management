let Fertilizer = new Schema({
  firstname: {
    type: String,
  },
  secondname: {
    type: String,
  },
});

module.exports = mongoose.model("Fertilizers", Fertilizers);
