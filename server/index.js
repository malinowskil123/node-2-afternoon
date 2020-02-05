const express = require('express')
const app = express()
const controller = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static('public/build'))

app.get('/api/messages', controller.read)
app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})
