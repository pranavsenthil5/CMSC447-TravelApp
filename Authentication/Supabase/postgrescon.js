const { Pool } = require('pg');

const pool = new Pool({
  user: 'pascal',
  host: 'ep-tiny-voice-59659868.us-east-2.aws.neon.tech',
  database: 'neondb',
  password: 'uAZg04eUXKhO',
  port: 5432,
});

async function queryDatabase() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM your_table');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Error querying the database:', error);
    throw error;
  }
}

module.exports = {
  queryDatabase,
};
