const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const dotenv = require('dotenv');

dotenv.config({ path:"./.env" });

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}));

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




// 회원가입
app.post("/api/user/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err);
        } else {
            connection.query(`INSERT INTO users (firstName, lastName, email, password, createdAt) VALUES(?, ?, ?, ?, now())`, 
            [req.body.firstName, req.body.lastName, req.body.email, hash], 
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
app.get("/api/user/login", (req, res) => {
    if  (req.session.user) {
        res.send({
            loggedIn: true,
            user: req.session.user
            });
    } else {
        res.send({
            loggedIn: false,
            user: null
        });
    }
});


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
                        req.session.user = results[0];
                        console.log(req.session.user);
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