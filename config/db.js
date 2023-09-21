const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose.connect("mongodb+srv://shreshth:shreshthkumar@cluster0.pkc715v.mongodb.net/befour?retryWrites=true&w=majority")
module.exports = {connection};