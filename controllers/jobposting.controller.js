const model = require("../models")

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await model.JobPosting.find();
        res.status(200).send({"Message" : "Success","data":data})
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};
