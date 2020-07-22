var noteData = require("../data/noteData");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
      noteData.push(req.body);
      res.json(true);
  });

  // Empty out the array of data
  app.post("/api/clear", function(req, res) {
    noteData.length = 0;
    res.json({ ok: true });
  });
};
