
var functions = {
    generatetable: (db) => {
        db.schema.hasTable('dru').then((e) => {
            if (!e) {
                db.schema.createTable('dru', (t) => {
                    t.increments('id').primary();
                    t.string('name');
                    t.string('region');
                    t.string('province');
                })
                    .then(console.log('table created'))
                    //then enter initial values
                    .then(() => db('dru').insert([
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
                    ]))
            }
            else {
                //no code here, just for debugging 
                console.log('table already exists')
            }
        })
            .then(
                () => {
                    db.schema.hasTable('staff')
                        .then((e) => {
                            if (!e) {
                                db.schema.createTable('staff', (t) => {
                                    t.increments('id').primary();
                                    t.string('username');
                                    t.string('firstname');
                                    t.string('middlename');
                                    t.string('lastname');
                                    t.integer('dru_id').unsigned();
                                    t.foreign('dru_id').references('dru.id');
                                    t.string('contact_number');
                                    t.string('email').unique();
                                    t.string('password');

                                })
                                    .then(console.log('table created'))
                                //then inset values
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                })
    }
}

module.exports = functions;