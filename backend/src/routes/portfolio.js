const express = require('express')
const router  = express.Router()
const { getAbout, getProjects, getSkills } = require('../controllers/portfolio')

router.get('/about', getAbout)
router.get('/projects', getProjects)
router.get('/skills', getSkills)

module.exports = router
