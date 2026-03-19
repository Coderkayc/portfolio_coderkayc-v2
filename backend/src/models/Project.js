const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true, maxlength: 150 },
    description: { type: String, required: true, trim: true, maxlength: 2000 },
    techStack:   { type: [String], default: [] },
    liveUrl:     { type: String, trim: true },
    repoUrl:     { type: String, trim: true },
    isFeatured:  { type: Boolean, default: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Project', projectSchema)
