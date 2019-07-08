const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contact = new Schema ({
    email:{type: String, required: true},
    firstName:{type: String, required:true},
    lastName:{type: String},
    message:{type: String, required: true}
});

const Contact = mongoose.model("Email", contact);

module.exports = Contact;