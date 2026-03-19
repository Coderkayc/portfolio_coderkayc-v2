require('dotenv').config()
const express   = require('express')
const cors      = require('cors')
const connectDB = require('./config/db')

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }))
app.use(express.json())

// Routes
app.use('/api/contact', require('./routes/contact'))
app.use('/api/portfolio', require('./routes/portfolio'))

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok', timestamp: new Date() }))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
