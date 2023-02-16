// router for notes

const notes = require('express').Router();

// load notes.html when /notes is accessed
notes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = notes;