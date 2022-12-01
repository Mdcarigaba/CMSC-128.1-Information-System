const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
    client: 'pg',
    //connection: 'postgres://admin:2O1RLqA7UxAxFkWFnfqIhfxmztXY5JwT@dpg-cdj1c8kgqg433fdfdf20-a/main_qcvq'
    //make sure that you have a user 'postgres' with password '1234' and database 'postgres'
    //with port '5433' for the database to be connected
    
    connection: {
        host: 'localhost',
        user: 'postgres',
        port: '5433',
        password: '1234',
        database: 'test_in'
    }
    //change connection 
})

const table = require('./local_modules/migration')

table.generatetable(db)
//insert tables in the database
//check for presence of table first
//if not present, create a new table
//chain this with other has table check for all 32+ tables

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "dashboard.html"));
})

/*app.get('/cif', (req, res) => {
    res.sendFile(path.join(initialPath, "cif.html"));
})*/

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "loginPage.html"));
})

//for test
app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(initialPath, "dashboard.html"));
})

app.get('/search-patient', (req, res) => {
    res.sendFile(path.join(initialPath, "search-patient.html"));
})

app.get('/generate-forms', (req, res) => {
    res.sendFile(path.join(initialPath, "generate-forms.html"));
})

app.get('/cif', (req, res) => {
    res.sendFile(path.join(initialPath, "cif-entry.html"));
})

app.get('/DRUqueueing', (req, res) => {
    res.sendFile(path.join(initialPath, "DRUqueueing.html"));
})

//make some fx within post request of cif entry
//cut array into multiple entries

app.post('/register-user', (req, res) => {
    const{username, firstname, middlename, lastname, dru, contact, email, password, usertype} = req.body;
    if(!username.length || !firstname.length || !middlename.length || 
        !lastname.length || dru === null || !contact.length ||  !email.length || !password.length || !usertype.length){
        res.json('Fill all fields');
    } else{
        db('staff').insert({
            username: username,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            dru_id: dru,
            contact: contact,
            email: email,
            password: password,
            usertype: usertype
        })
        .returning(["username", "email", "usertype"])
        .then(data =>{
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('Email already exists');
            }
        })
    }
})

app.post('/login-user', (req,res) => {
    const {username, password} = req.body;
    
    db.select('username', 'email', 'usertype')
    .from('staff')
    .where({
        username: username,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('Username or password is incorrect');
        }
    })
})

//for testing
app.get('/fetch-dru', (req, res) => {
    db.select('name')
        .from('dru')
        .returning()
        .then(data => {
            res.json(data)
        })
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000.')
})