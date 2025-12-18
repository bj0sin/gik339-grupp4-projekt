/* console.log("Node.js + SQLite"); */
import express from "express";
import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./my.db");
/* db.all('SELECT * FROM movies', (err, rows) => console.log(rows)); */

const server = express();

server
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");

});

server.get('/movies', (req, res) => {
    const sql = 'SELECT * FROM movies';
    db.all(sql, (err, rows) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.send(rows);
        }
    });
});