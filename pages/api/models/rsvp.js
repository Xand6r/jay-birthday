const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    email: String,
    attendance: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// define the model
let model;
try {
  model = mongoose.model("response");
} catch (error) {
  model = mongoose.model("response", dataSchema);
}

export default model;
