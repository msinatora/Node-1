const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.ee3km2a.mongodb.net/`)
}

module.exports = connectToDatabase