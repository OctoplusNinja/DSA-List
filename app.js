const express = require("express")
const app = express();
const wishes = require('./routes/wishes')
const morgan = require('morgan')
const connectDB = require('./db/connect')
require('dotenv').config();

// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/wishes', wishes)


const port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is Listening on port ${port}...`));
    } catch (err) {
        console.log(err)
    }
}

start()