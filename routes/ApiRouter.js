const express = require("express");
const router = express.Router();
const AuthRouter = require("./Auth.js");

// create a list of 10 colors in rgb, an array of objects with the following properties: id, name, rgb
const list = [
    { id: 1, name: "red", rgb: "rgb(255, 0, 0)" },
    { id: 2, name: "green", rgb: "rgb(0, 255, 0)" },
    { id: 3, name: "blue", rgb: "rgb(0, 0, 255)" },
    { id: 4, name: "yellow", rgb: "rgb(255, 255, 0)" },
    { id: 5, name: "cyan", rgb: "rgb(0, 255, 255)" },       
];

router.use("/auth", AuthRouter);

router.get("/data", (req, res) => {
    res.json(list);
});

module.exports = router;