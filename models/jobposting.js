const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skillsRequired: {
    type: [String],
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  biddersInvited: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bidder'
    }
  ]
},{ timestamps: true });

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;
