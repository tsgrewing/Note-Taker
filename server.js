const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// telling the server to listen 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });