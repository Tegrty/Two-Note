// router for notes

const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');




// get route to retrieve notes from db.json
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
// notes.get('/:note_id', (req, res) => {
//     const noteId = req.params.note_id;

//     readFromFile('./db/db.json')
//         .then((data) => JSON.parse(data))
//         .then((json) => {
//             const result = json.filter((note) => note.note_id === noteId);

//             return result.length > 0
//                 ? res.json(result)
//                 : res.json('No note with that ID');
//         });
// });



// POST route for /api/notes
notes.post('/', (req, res) => {
    console.log(req);
    console.log('test');

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});


module.exports = notes;