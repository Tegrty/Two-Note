// router for notes

const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile, deleteNote } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');




// get route to retrieve notes from db.json
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});




// POST route for /api/notes
notes.post('/', (req, res) => {

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




// // GET route for a specific note
notes.get('/:note_id', (req, res) => {
if (req.params.note_id) {
    const noteId = req.params.note_id;
    console.log('noteId:', noteId);

    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            console.log('result:', result);

            return result.length > 0
                ? res.json(result)
                : res.json('No note with that ID');
        });
} else {
    res.error('Error in getting note');
}
});



// // DELETE route for deleting a note by its note_id
notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    console.log('noteId:', noteId)

    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Filter out the note with the matching note_id
            const updatedNotes = json.filter((note) => note.note_id !== noteId);
            console.log('updatedNotes:', updatedNotes);

            // Write the updated notes back to the file
            writeToFile('./db/db.json', updatedNotes);
            console.log('updated data written to ./db/db.json');

            res.json(`Note with ID ${noteId} deleted successfully 🚀`);
        })
        .catch((err) => {
            console.error(err);
            res.error('Error in deleting note');
        });
});






module.exports = notes;