const fs = require("fs");
const path = require('path');
const uuid = require("uniqid");

// Calculate the filepath to the data.json file
const filepath = path.join(__dirname, '../../data.json');

// Generate a unique ID
const uniqueId = uuid();

module.exports= (req, res) => {
    const users = require(filepath);
    res.render("list.ejs", { users });
  }