const Project = require('../models/Project')
const Skill   = require('../models/Skill')

const getAbout = (_, res) => {
  res.json({
    success: true,
    data: {
      name: 'Your Name',
      role: 'Full Stack Developer',
      location: 'Your City, Country',
      summary: 'I build dependable APIs and beautiful web interfaces. I like clean architecture, fast feedback loops, and mentoring junior developers.',
      contactEmail: 'hello@yourname.dev',
    },
  })
}

const getProjects = async (_, res) => {
  try {
    const projects = await Project.find().sort({ isFeatured: -1, createdAt: -1 })
    res.json({ success: true, count: projects.length, data: projects })
  } catch (err) {
    console.error('getProjects error:', err.message)
    res.status(500).json({ error: 'Server error while reading projects.' })
  }
}

const getSkills = async (_, res) => {
  try {
    const skills = await Skill.find().sort({ level: -1, name: 1 })
    res.json({ success: true, count: skills.length, data: skills })
  } catch (err) {
    console.error('getSkills error:', err.message)
    res.status(500).json({ error: 'Server error while reading skills.' })
  }
}

module.exports = { getAbout, getProjects, getSkills }
