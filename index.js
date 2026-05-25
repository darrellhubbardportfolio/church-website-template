require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// read express static files
app.use("/public", express.static(path.join(__dirname, "public")));

// handles parsing form-data
app.use(express.urlencoded({ extendend: true }));
app.use(express.json());

// setup view engine
app.set("view engine", "ejs");

// import routes
const AdminRouter = require("./routes/AdminRouter.js");
const ApiRouter = require("./routes/ApiRouter.js");
const HomeRouter = require("./routes/HomeRouter.js");
const MeetingRouter = require("./routes/MeetingRouter.js");

// create routers
app.use("/", HomeRouter);
app.use("/api", ApiRouter);
app.use("/admin", AdminRouter);
app.use("/meetings", MeetingRouter);


const port = process.env.PORT;
app.listen(port, () => 
{
    console.log("Server is running on port: ", port);
})