const Wish = require('../models/wishes')

const getWishes = async (req, res) => {
    try {
        const wishes = await Wish.find({});
        res.status(200).json(wishes)
    } catch (err) {
        res.status(500).json({ msg: err })
    }

}

const createWish = async (req, res) => {
    try {
        const wish = await Wish.create(req.body);
        res.status(201).json({ wish })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports = { getWishes, createWish }