const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(initialPath));

let initialPath = path.join(__dirname, "pages");

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})