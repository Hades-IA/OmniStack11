const express = require("express");
const app = express();
const cors = require("cors")

const ongController = require("./controller/ongController");
const incidentController = require("./controller/incidentController");
const sessionController = require("./controller/sessionController");
app.use(express.json());

app.use(cors());



app.use("/", ongController)
app.use("/", incidentController)
app.post("/session", sessionController.create)
app.post("/ong/delete", sessionController.delete)

module.exports = app;