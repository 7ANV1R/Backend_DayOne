import express from "express";
// import mongoose from "mongoose";

// app config

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:admin@cluster0.hhix2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Middlewares

//DB config

// API Endpoints

app.get("/", (req, res) => res.status(200).send("Working!"));

// Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
