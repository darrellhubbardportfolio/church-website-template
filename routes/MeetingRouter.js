const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.render("shared/layout", {
        title: "Meetings",
        template: "./../admin/meetings/meetings.ejs"
    });
});

router.get("/create-one", (req, res) => {

    res.render("shared/layout", {
        title: "Meetings Create A New Meeting",
        template: "./../admin/meetings/create-meeting.ejs"
    });
});

router.post("/create-one", (req, res) => {
    
    const { title, category, startDateTime, duration } = req.body; 
    res.send("meeting created. ", req.body);
});

router.get("/update-one", (req, res) => {

    const { title, category, startDateTime, duration } = req.body;
    res.render("./../admin/meetings/update-meeting", {
        title: "Meeting Updates",
        template: "./../admin/meetings/update-meeting.ejs"
    });
});

router.post("/update-one", (req, res) => {

    const { title, category, startDateTime, duration } = req.body;
    res.send("update a meeting.", req.body);
});

module.exports = router;