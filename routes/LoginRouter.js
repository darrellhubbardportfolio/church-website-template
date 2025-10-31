const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("login page");
});

router.post("/verify", (req, res) => {
    res.send("verifying login");
});

module.exports = router;