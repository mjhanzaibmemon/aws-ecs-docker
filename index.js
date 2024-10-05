const express = require("express");
const path = require("path");

const app = express();

// Public folder ko static serve karne ke liye set karein
app.use(express.static(path.join(__dirname, 'public')));

// "/" route ke liye index.html serve karo
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// /info route ke liye ek simple message return karein
app.get("/info", (req, res) => {
  res.send("Hey, this is the /info API");
});

// Server ko port 3000 pe sunao
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
