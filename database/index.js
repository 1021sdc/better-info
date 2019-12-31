const { Pool } = require('pg');

const pool = new Pool({
    user: 'student',
    host: 'localhost',
    database: 'mytestdb',
    password: 'student',
    port: 5432,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}