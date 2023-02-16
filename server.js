// set up server and listen on port 3001 for requests
const express = require("express");
const app = express();
const path = require("path");
const api = require("./routes/index");
const PORT = 3001;

app.use('/api', api); // This is the route that will serve up the api routes (index.js)


app.use(express.static("public")); // This is the folder that will serve up the static files

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true })); // this line is for parsing form data
app.use(express.json()); // this line is for parsing json data

// This is the route that will serve up notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});












app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);