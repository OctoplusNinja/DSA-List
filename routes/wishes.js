const express = require('express')
const router = express.Router()

const {
    getWishes,
    createWish
} = require('../controllers/wishes')

router.route('/').get(getWishes).post(createWish)

module.exports = router