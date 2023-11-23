if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config({path: "config.env"})
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const path = require('path')
const router = require('./routers/router')
const { database } = require('./connection')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("views", path.resolve("views"))
app.set("layout", "layouts/layout")
app.use(express.static(__dirname + "/public"))
app.use(router)
// app.use()
database("mongodb+srv://upgraderboy:VTCQutTsr2SDoT2A@cluster0.3wreb4r.mongodb.net/?retryWrites=true&w=majority")
// Listening by the server
console.log('='.repeat(100))
app.listen(PORT, () => {
  console.log('\x1b[36m',`Your server has been started on port: ${PORT}!`,'\x1b[0m')
})
