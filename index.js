var express = require("express");
var app = express();

app.get("/tasks", (req, res, next) => {
    res.json([
        { "name": "feed dog", 
        "desc": "the food is in the garage"},
        { "name": "feed cat", 
        "desc": "the food is in the garage"}
    ]);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});