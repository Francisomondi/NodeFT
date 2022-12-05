const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "employeesystem"
})

app.post("/create", (req, res) => {
    const name = req.body.name,
    const age = req.body.age,
    const country = req.body.country,
    const position = req.body.position,
    const wages = req.body.wages

    db.query("INSERT INTO employees(name,age,country,position,wages) VALUES(?,?,?,?,?)",
        [nam, eage, country, position, wages], (err, result) => {
            if (err) console.log(err)
            else (
                res.send("values inserted successfully")
            )

        })
})

const PORT = 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))