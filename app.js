const express = require("express")
const app = express();
const wishes = require('./routes/wishes')
const morgan = require('morgan')
const connectDB = require('./db/connect')
const notFound = requier('./middleware/notFound.js')
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/wishes', wishes)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server is Listening on port ${PORT}...`));
    } catch (err) {
        console.log(err)
    }
}

start()