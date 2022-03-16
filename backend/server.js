const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");

// https://www.youtube.com/watch?v=H1BebGmRjzE&list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo&index=4

// https://github.com/piyush-eon/notezipper

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  //   console.log(req.params);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on Port ${PORT}`));
