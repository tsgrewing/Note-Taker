const fs = require("fs");
var noteData = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.get("/api/notes/:id", function(req, res) {
    res.json(noteData[Number(req.params.id)]);
  });

  app.post("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", function(err, data){
      let notes = JSON.parse(data);
      notes.push(req.body);
      fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
          console.log(err);
      });
  });
  res.send(noteData);
  });

  
  // Empty out the array of data
  app.delete("/api/notes:id", function(req, res) {
    let noteId = req.params.id;
    let newId = 0;
    noteData = noteData.filter(currentNote => {
        return currentNote.id != noteId;
    });
    for (currentNote of noteData) {
        currentNote.id = newId.toString();
        newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
    res.json(noteData);
    }); 
};
