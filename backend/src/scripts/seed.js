require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('../config/db')
const Project = require('../models/Project')
const Skill = require('../models/Skill')

const seed = async () => {
  await connectDB()

  await Project.deleteMany({})
  await Skill.deleteMany({})

  const projects = [
    {
      title: 'Next.js Portfolio',
      description: 'A responsive portfolio built with Next.js and Node.js, including contact form integration and dark mode.',
      techStack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://yourdomain.com',
      repoUrl: 'https://github.com/yourhandle/portfolio',
      isFeatured: true,
    },
    {
      title: 'API Developer Dashboard',
      description: 'A dashboard app for tracking API usage, error rates, and performance metrics.',
      techStack: ['React', 'Express', 'PostgreSQL', 'TypeScript'],
      liveUrl: 'https://dashboard.yourdomain.com',
      repoUrl: 'https://github.com/yourhandle/api-dashboard',
      isFeatured: false,
    },
  ]

  const skills = [
    { name: 'JavaScript', category: 'language', level: 'Expert', years: 7 },
    { name: 'Node.js', category: 'backend', level: 'Expert', years: 6 },
    { name: 'Express', category: 'backend', level: 'Advanced', years: 5 },
    { name: 'MongoDB', category: 'database', level: 'Advanced', years: 4 },
    { name: 'React', category: 'frontend', level: 'Advanced', years: 6 },
  ]

  await Project.insertMany(projects)
  await Skill.insertMany(skills)

  console.log('Seeding completed 🎉')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
