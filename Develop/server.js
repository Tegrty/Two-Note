// set up server and listen on port 3001 for requests
const express = require("express");
const app = express();
const path = require("path");
const api = require("./Routes/index");
const PORT = 3001;



app.use(express.static("public")); // This is the folder that will serve up the static files

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true })); // this line is for parsing form data
app.use(express.json()); // this line is for parsing json data














app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
