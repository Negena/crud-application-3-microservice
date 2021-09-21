const mongoose = require("mongoose");

const db = mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('connected'))
.catch((err) => console.log(err));

const schema = ({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, 
    age: Number,
    occupation: String, 
    about: String 
});

const User = mongoose.model("User", schema);

module.exports = User;