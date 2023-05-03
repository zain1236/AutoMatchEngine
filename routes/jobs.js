var express = require("express")
var router = express.Router();
var controller = require("../controllers")



router.get("/",controller.jobPosting.getAllJobs)


module.exports = router;