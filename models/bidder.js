const mongoose = require('mongoose');

const bidderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  skills: {
    type: [String],
    required: true
  },
  preferences: {
    type: [String],
    required: true
  },
  invitations: [
    {
      jobPostingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'JobPosting'
      },
      timestamp: {
        type: Date,
        required: true,
        default: Date.now
      }
    }
  ]
});

const Bidder = mongoose.model('Bidder', bidderSchema);

module.exports = Bidder;
