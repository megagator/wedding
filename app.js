const express = require('express')
const app = express()
const port = 1111

app.get('/', (req, res) => 
  res.sendFile(__dirname + '/index.html')
)

app.use(express.static('public'))

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`)
)