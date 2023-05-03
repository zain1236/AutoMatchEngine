var express = require('express');
var router = express.Router();
var jobsRouter = require("./jobs")

router.use("/jobs",jobsRouter)

module.exports = router;
