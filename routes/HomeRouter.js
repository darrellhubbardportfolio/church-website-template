const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.render("shared/layout", {
        title: "Home",
        template: "./../index.ejs"
    });
});

module.exports = router;