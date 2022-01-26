const express = require('express')
const app = express()
const port = 3030
const axios = require('axios')
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Sup World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


// API endpoint
// 'https://opentdb.com/api.php'
// No Key necessary

// SAMPLE REQ
// 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple'
// params
// category: 15
// type: "multiple"
// ammount: 10
// difficulty: "medium"