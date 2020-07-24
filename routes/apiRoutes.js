const fs = require("fs");
const db = "./db/db.json";
let noteList = JSON.parse(fs.readFileSync(db, 'utf8'));

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteList);
  });

  app.get("/api/notes/:id", function(req, res) {
    res.json(noteList[(req.params.id)]);
  });

  app.post("/api/notes", function(req, res) {
      let note = req.body;
      note.id = (noteList.length);
      noteList.push(note);
      fs.writeFileSync(db, JSON.stringify(noteList));
      res.json(noteList)
  });

  // Delete note by filtering the object with matching id out of the array
  app.delete("/api/notes/:id", function(req, res) {
    let noteId = req.params.id;
    let newId = 0;
    console.log(`Deleting note with id:${noteId}`);
    noteList = noteList.filter(currentNote => {
        return currentNote.id != noteId;
    });
    for (currentNote of noteList) {
        currentNote.id = newId;
        newId++;
    }
    fs.writeFileSync(db, JSON.stringify(noteList));
    res.json(noteList);
    }); 
};
