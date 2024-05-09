const mongoose = require("mongoose");

const materiaSchema = new mongoose.Schema({
	primer_parcial_bien: { type: Number, default: 0 },
	primer_parcial_mal: { type: Number, default: 0 },
	segundo_parcial_bien: { type: Number, default: 0 },
	segundo_parcial_mal: { type: Number, default: 0 },
	final_bien: { type: Number, default: 0 },
	final_mal: { type: Number, default: 0 },
	bien: { type: Number, default: 0 },
	mal: { type: Number, default: 0 },
});

module.exports =
	mongoose.models.Materia || mongoose.model("Materia", materiaSchema);
