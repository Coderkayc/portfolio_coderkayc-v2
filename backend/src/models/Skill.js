const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema(
  {
    name:      { type: String, required: true, trim: true, maxlength: 100 },
    category:  { type: String, trim: true, default: 'general' },
    level:     { type: String, trim: true, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], default: 'Intermediate' },
    years:     { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Skill', skillSchema)
