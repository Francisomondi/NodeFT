const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "employeesystem"
})


const PORT = 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))