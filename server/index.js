const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config({ path:"./.env" });

app.use(cors());

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


// 회원가입
app.post("/api/user/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err);
        } else {
            connection.query(`INSERT INTO users (name, email, password, createdAt) VALUES(?, ?, ?, now())`, 
            [req.body.name, req.body.email, hash], 
            (error, results, fields) => { 
                if(error) {
                    console.log(error);
                    res.send({
                        status: "error",
                        
                    })
                } else {
                    res.send({
                        status: "success",
                    })
                }
            });
        }
    });
});

// 로그인
app.post("/api/user/login", (req, res) => {
    connection.query(`SELECT * FROM users WHERE email = ?`,
    [req.body.email],
    (error, results, fields) => {
        if(error) {
            res.send({
                status: "error",
            })
        } else {
            if(results.length > 0) {
                bcrypt.compare(req.body.password, results[0].password, (err, response) => {
                    if(response) {
                        res.send({
                            status: "success",
                            data: results[0]
                        })
                    } else {
                        res.send({
                            status: "error",
                        })
                    }
                });
            } else {
                console.log("no user");
                res.send({
                    status: "error",
                })
            }
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000);