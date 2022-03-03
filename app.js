
// var msg = "Hello"

// console.log(msg);

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/test_nodejs'

const app = express()

mongoose.connect(url
    , {

        useNewUrlParser: true,
    }
)

const con = mongoose.connection


con.on('open', function () {
    console.log("connected")
})

const dataRouter = require('./routers/data')
app.use(express.json())
app.use('/data', dataRouter)

app.listen(9000,
    function () {

        console.log('Server Started')

    })