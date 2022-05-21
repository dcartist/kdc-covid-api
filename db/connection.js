const mongoose = require('mongoose')
mongoose.Promise = Promise
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://127.0.0.1:27017/abcschool";
    // mongoURI = "mongodb://localhost:27017/abcschool";
}
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`)) 
    .catch(error => console.log('Connection failed!', error))

module.exports = mongoose