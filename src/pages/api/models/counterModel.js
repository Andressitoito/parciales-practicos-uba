const mongoose = require("mongoose");

const examCounterSchema = new mongoose.Schema({
 // _id: mongoose.Schema.Types.ObjectId,
 name: String,
 count: { type: Number, default: 0 }
});

module.exports =
 mongoose.models.ExamCounter || mongoose.model("ExamCounter", examCounterSchema);
