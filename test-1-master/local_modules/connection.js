const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        port: '5433',
        password: '1234',
        database: 'test_in'
    } 
})

module.exports = db;