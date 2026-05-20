const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "multitierdb"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/api", (req, res) => {
  res.send("Hello from Dockerized Node.js Backend🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});