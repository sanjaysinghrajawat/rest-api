const express = require('express')
const router = require('./routes/products')
const app = express()
const {connectDb} = require('./db/connect')
require('dotenv').config()

app.use(express.json())
app.use("/api/v1/products", router)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    connectDb();
    console.log(`Server run on ${PORT}`)
})