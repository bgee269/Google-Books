const express = require("express");
const path = require("path");
 //const mongoose = require(“mongoose”);
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";

// connects our back end code with the database
//mongoose.connect(
  //dbRoute,
 // { useNewUrlParser: true }
// );

// let db = mongoose.connection;

// db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
