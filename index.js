require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

// read express static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/views", express.static(path.join(__dirname, "views")));

// handles parsing form-data
app.use(express.urlencoded({ extendend: true }));
app.use(express.json());
// setup view engine
app.set("view engine", "ejs");

// import routes
const AdminRouter = require("./routes/AdminRouter.js");
const HomeRouter = require("./routes/HomeRouter.js");
const LoginRouter = require("./routes/LoginRouter.js");
const MeetingRouter = require("./routes/MeetingRouter.js");
const RegisterRouter = require("./routes/RegisterRouter.js");

// create routers
app.use("/", HomeRouter);
app.use("/login", LoginRouter);
app.use("/register", RegisterRouter);
app.use("/admin", AdminRouter);
app.use("/meetings", MeetingRouter);


const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running on port: ", port);
})