/**
 * Contains Routes for querys
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Tests that it is working by printing the word test on localhost:3000
app.get('/', (request, response) => {
    response.json({ info: 'Test' })
})

// Tests that querying the database is working by printing a list of users on localhost:3000/accounts
app.get('/accounts', db.getAccounts)

// Runs the App on port 3000
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

