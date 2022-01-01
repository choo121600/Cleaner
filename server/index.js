const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config({ path:"./.env" });

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect( (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("success") 
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.post("/api/user/register", (req, res) => {
    
    return res.status(200)
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000);