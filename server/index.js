const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "employee_system"
})

app.post("/create", (req, res) => {

    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wages = req.body.wages

    db.query("INSERT INTO employee(name,age,country,position,wages) VALUES(?,?,?,?,?)",
        [name, age, country, position, wages], (err, result) => {
            if (err) console.log(err)
            else (
                res.send(result)
            )

        })
})

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if (err) console.log(err)
        else (res.send(result))
    })
})

app.put("/update", (req, res) => {
    const id = req.body.id
    const wages = req.body.wages


    db.query("UPDATE employee SET wages = ? WHERE id = ?", [wages, id], (err, result) => {
        if (err) console.log(err)
        else (res.send(result))
    })
})

const PORT = 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))