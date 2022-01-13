const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Be Provided with Name"],
        trim: true,
        maxlength: [30, "Name cannot be more than 30 characters"]
    },
    wish: {
        type: String,
        required: [true, "Wish is required"],
        maxlength: [120, "Wish cannot be more than 120 characters"]
    }
})

module.exports = mongoose.model('Wish', WishSchema)