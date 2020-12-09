const app = require("express");
const router = app.Router();
const ireport = require("../models/ireport");

router.get("/", function (req, res) {
    ireport.all(function (data) {
        console.log(data);
        var hbsObject = {
            ireports: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/ireport", function (req, res) {
    console.log("post" + req.body.ireport_name)
    ireport.create([
        "ireport_name",
    ], [
        req.body.ireport_name,
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/ireport/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    ireport.update({
        solved: req.body.solved,
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 