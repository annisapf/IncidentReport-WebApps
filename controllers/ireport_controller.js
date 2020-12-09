const app = require("express");
const router = app.Router();
const ireport = require("../models/ireport");

router.get("/", function (req, res) {

    res.render("index", "");

});

module.exports = router; 