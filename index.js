const {Client} = require('pg')
const client = new Client({
    user: "pascal",
    password: "uAZg04eUXKhO",
    host: "ep-tiny-voice-59659868.us-east-2.aws.neon.tech",
    port: 5432,
    database: "neondb",
    ssl: true
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("select * from account"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())