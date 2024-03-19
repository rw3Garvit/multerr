require("dotenv").config();

const http = require("http");
const express = require("express");
const { dbConnect } = require("./db/dbConnect");
const routes = require("./routes");
const app = express();


const bodyParser = require("body-parser");

// body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use("/v1", routes);

//DB connection
dbConnect();

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server start success");
});
