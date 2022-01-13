const Wish = require('../models/wishes')

const getWishes = async (req, res) => {

    res.status(200).json({ Data: "Hello" })
}

const createWish = async (req, res) => {
    const wish = await Wish.create(req.body);
    res.status(201).json({ wish })
}

module.exports = { getWishes, createWish }