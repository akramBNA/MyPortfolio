const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/MyPortfolio";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true },)
.then(()=> console.log("DB Connected successfully :)"))
.catch((error) => {console.error(error);})
const db = mongoose.connection;

module.exports = db