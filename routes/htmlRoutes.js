// var path = require("path");

// module.exports = function(app) {
//   app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
//   });

//   // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

//   app.get("/", function(req, res) {
//     res.json(path.join(__dirname, "public/index.html"));
//   });
// };

let path = require("path");

// routing 
module.exports = function(app){
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}