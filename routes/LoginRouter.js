const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("shared/layout", {
        title: "Login",
        template: "./../login-page.ejs"
    });
});

router.get("/register", (req, res) => {
    res.render("shared/layout", {
        title: "Register",
        template: "./../register-page.ejs"
    });
});

router.post("/verify", (req, res) => {
    res.send("verifying login");
});

module.exports = router;