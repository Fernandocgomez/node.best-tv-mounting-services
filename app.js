// Dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Configs 
const app = express();

// Terminal logs
app.use(morgan("dev"));

// connect to mongo DB 
const mongoUrl = "mongodb+srv://" + process.env.MONGO_ATLAS_USERNAME + ":" + process.env.MONGO_ATLAS_PW + process.env.MONGO_ATLAS_DOMAIN + process.env.MONGO_ATLAS_DBNAME + "?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise;

// Import routes
const leadRoutes = require("./src/routes/lead");

// Middlewares
// const MiddleWares = require("./src/middlewares/errorHandler");

// Parse body from incoming request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// CORS
app.use(cors());

// Routes
app.use("/leads", leadRoutes)

// Error handlers
// app.use(MiddleWares.errorHandler);

// app.use(MiddleWares.errorHandlerShowMessage);

module.exports = app;