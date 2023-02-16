// set up server and listen on port 3001 for requests
const express = require("express");
const app = express();
const path = require("path");
const api = require("./Routes/index");
const PORT = 3001;

// Default route to serve up the index.html page
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "./public/index.html"))
);







app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
