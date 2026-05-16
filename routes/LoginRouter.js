const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("login-page");
});

router.post("/verify", (req, res) => {
    res.send("verifying login");
});

module.exports = router;