const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: '1234',
        database: 'logindb'
    }
})

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "home.html"));
})

app.get('/staff', (req, res) => {
    res.sendFile(path.join(initialPath, "staff-home.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})

app.post('/register-user', (req, res) => {
    const{name, email, password, usertype} = req.body;
    if(!name.length || !email.length || !password.length || !usertype.length){
        res.json('Fill all fields');
    } else{
        db("users").insert({
            name: name,
            email: email,
            password: password,
            usertype: usertype
        })
        .returning(["name", "email", "usertype"])
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
    const {email, password} = req.body;
    
    db.select('name', 'email', 'usertype')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('Email or password is incorrect');
        }
    })
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000.')
})