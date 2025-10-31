const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.render("shared/admin-layout", {
        title: "Admin",
        template: "./../admin/dashboard.ejs"
    });
});

module.exports = router;