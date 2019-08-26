const express = require("express");
const fs = require("fs");
const router = express.Router();

// endpoint: '/'
router.route("/").get((req, res) => {
  fs.readFile(__dirname + "/data.json", "utf8", function(err, data) {
    if (err) console.error(err);
    let users = JSON.parse(data);
    res.send(users);
  });
});
// endpoint: '/users/id'
router.route("/:id").get((req, res) => {
  fs.readFile(__dirname + "/data.json", "utf8", function(err, data) {
    if (err) console.error(err);
    console.log(data);
    res.send();
  });
});

// endpoint: '/users/:id/todos'
router.route("/:id/todos").get((req, res) => {
  fs.readFile(__dirname + "/data.json", "utf8", function(err, data) {
    if (err) console.error(err);
    console.log(data);
    res.send();
  });
});

module.exports = router;
