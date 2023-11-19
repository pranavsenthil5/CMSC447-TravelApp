/**
 * Creates connection to the database and has a list of queries to use
 */
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pascal',
  host: 'ep-tiny-voice-59659868.us-east-2.aws.neon.tech',
  database: 'neondb',
  password: 'uAZg04eUXKhO',
  port: 5432,
  ssl: true
})

// A test query that querys every user account and orders them by user_id
const getAccounts = (request, response) => {
    pool.query('SELECT * FROM account ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

// Exports queries so that they can be used elsewhere
module.exports = {
    getAccounts,
}