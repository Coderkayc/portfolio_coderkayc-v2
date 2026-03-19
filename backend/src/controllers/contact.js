const Message = require('../models/Message')

// POST /api/contact
const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const newMessage = await Message.create({ name, email, message })

    res.status(201).json({
      success: true,
      message: 'Message received. I\'ll get back to you soon!',
      id: newMessage._id,
    })
  } catch (err) {
    console.error('Contact error:', err.message)
    res.status(500).json({ error: 'Server error. Please try again later.' })
  }
}

// GET /api/contact  (optional: view all messages)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json({ success: true, count: messages.length, data: messages })
  } catch (err) {
    res.status(500).json({ error: 'Server error.' })
  }
}

module.exports = { sendMessage, getMessages }
