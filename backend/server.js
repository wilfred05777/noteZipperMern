import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// https://github.com/piyush-eon/notezipper
// https://www.youtube.com/watch?v=wtc3prRF9M0&list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo&index=9

dotenv.config();
connectDB();
const app = express();

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

// Creating First Node JS Server and Express JS API - MERN Stack Project Tutorial #4
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on Port ${PORT}`));
