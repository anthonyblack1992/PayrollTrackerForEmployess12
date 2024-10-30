const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'departments_db',
    password: 'Bandman313',
    port: 5432,
});

module.exports = pool;