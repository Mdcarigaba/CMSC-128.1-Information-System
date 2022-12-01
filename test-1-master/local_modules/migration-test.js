const db = require('../local_modules/connection')

function check_dru() {
    return db.schema.hasTable('dru')
}

function create_dru(e) {
    if (!e) return db.schema.createTable('dru', (t) => {
        t.increments('id').primary();
        t.string('name');
        t.string('region');
        t.string('province');
    })
    else return console.log('table already exists')
}

function insert_dru (e) {
    if (e != undefined) return db('dru').insert([
        {
            name: 'PGH',
            region: 'NCR',
            province: 'Manila'
        },
        {
            name: 'PPL',
            region: '4A',
            province: 'Laguna'
        },
        {
            name: 'HealthServe',
            region: '4A',
            province: 'Laguna'
        }
    ]).then(console.log('insert success'))
}


var functions = {
    generatetable: () => {
        check_dru().then((e) => create_dru(e))
        .then((e) => insert_dru(e))
    }
}

module.exports = functions;