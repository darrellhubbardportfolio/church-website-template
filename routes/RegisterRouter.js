const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("registeration page");
});

router.post("/verify", (req, res) => {
    res.send("registration verification");
});

module.exports = router;