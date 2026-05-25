const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

// login
router.get("/login", (req, res) => {
    res.render("shared/layout", {
        title: "Login",
        template: "./../login-page.ejs"
    });
});

// signup
router.get("/register", (req, res) => {
    res.render("shared/layout", {
        title: "Register",
        template: "./../register-page.ejs"
    });
});

// verify login
router.post("/login/verify", (req, res) => {
    res.send("verifying login");
});

module.exports = router;