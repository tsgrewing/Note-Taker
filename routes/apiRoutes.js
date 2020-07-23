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
      let json = JSON.parse(data);
      json.push(req.body);
      fs.writeFile("./db/db.json", JSON.stringify(json), function(err){
          console.log(err);
      });
  });
  res.send(tableData);
  });

  // Empty out the array of data
  app.delete("/api/notes:id", function(req, res) {
    let noteId = req.params.id;
    let newId = 0;
    tableData = tableData.filter(currentNote => {
        return currentNote.id != noteId;
    });
    for (currentNote of tableData) {
        currentNote.id = newId.toString();
        newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(tableData));
    res.json(tableData);
    }); 
};
