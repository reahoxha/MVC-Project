const express = require("express");
const homeController = require("./controllers/homeController.js");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", homeController.getHomeView);

app.get("/api/:name", homeController.getCelebrityName);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}! Go catch it!!! `);
});
