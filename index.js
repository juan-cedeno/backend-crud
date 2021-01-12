require('dotenv').config()
const express = require('express');
const cors = require('cors')
const { connectDatabase } = require('./dataBase/config');


const app = express()
app.use(express.json())
app.use(cors())
connectDatabase()



app.use('/api/' , require('./router/product'))

app.listen( process.env.PORT ,() => {
    console.log(process.env.PORT);
})