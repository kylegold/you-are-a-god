const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Message Schema;
// =============:
const messageSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true
	},
	created_At: { type: Object },
	created: {
		type: Date,
		default: Date.now
	}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
