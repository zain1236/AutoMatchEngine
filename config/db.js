var mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongoose Connected...")
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectToDatabase;