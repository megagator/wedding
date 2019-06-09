const express = require('express')
const path = require('path')
const app = express()

const { add, list, csv } = require('./server/routes')

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.set('trust proxy', true)
app.use(express.json())
app.post('/rsvp/add', async (req, res) => {
  try {
    const result = await add(req.body, req.ip, req.headers['user-agent'])
    res.send(JSON.stringify({ data: result }))
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send(`{"error": ${error}}`)
  }
})

app.get('/rsvp/list', async (req, res) => {
  const result = await list()
  res.send(result)
})
app.get('/rsvp/csv', async (req, res) => {
  const result = await csv()
  res.set('Content-Type', 'text/csv')
  res.attachment(`rsvps_${new Date().getTime()}.csv`)
  res.send(result)
})

app.listen(1111)
console.log('Actively listening on port 1111')
