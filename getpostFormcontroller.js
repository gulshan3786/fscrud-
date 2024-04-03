
const fs = require("fs");
const path = require('path');
const uuid = require("uniqid");

// Calculate the filepath to the data.json file
const filepath = path.join(__dirname, '../../data.json');

// Generate a unique ID
const uniqueId = uuid();
module.exports=(req, res) => {
    //let data = req.body;
    //console.log(data);
  
    let data = { uniqueId, ...req.body };
    let userjson = fs.readFileSync(filepath, "utf-8");
    let users = JSON.parse(userjson);
    users.push(data);
    userjson = JSON.stringify(users);
    fs.writeFileSync(filepath, userjson, "utf-8");
    //res.send(res.render("pages/list", { users }));
    res.redirect("list");
    //res.send(res.render("pages/userdetails", { users }));
  
    console.log(uniqueId);
    console.log(data);
  }