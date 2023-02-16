// set up server and listen on port 3001 for requests
const express = require("express");
const app = express();
const path = require("path");
const api = require("./routes");
const PORT = 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true })); // this line is for parsing form data
app.use(express.json()); // this line is for parsing json data

app.use(express.static("public")); // This is the folder that will serve up the static files
app.use('/api', api); // This is the route that will serve up the api routes (index.js)




// GET route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// This is the route that will serve up notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// GET route for json data
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"));
});




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
