const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/inotebook"

require('dotenv').config();
const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    // process.exit()
}
}
module.exports = connectToMongo;