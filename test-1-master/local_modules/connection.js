const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        port: '5432',
        //password: '1234',
        database: 'postgres'
    } 
})

module.exports = db;