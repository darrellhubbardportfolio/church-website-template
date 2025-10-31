const express = require("express");
const router = express.Router();

// default route
router.get("/", (req, res) => {

    res.render("shared/layout", {
        title: "Home",
        template: "./../index.ejs"
    });
});

// logging out
router.post("/logout", (req, res) => {
    let logout = req.session.destroy();
    logout ? res.redirect("/") : res.send({msg: "cannot logout"});
});

module.exports = router;