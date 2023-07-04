const express = require("express");
const portfolioRoutes = require("./routes/portfolio.routes");

const db = require("./database");
const app = express();
const PORT =process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/portfolio", portfolioRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});