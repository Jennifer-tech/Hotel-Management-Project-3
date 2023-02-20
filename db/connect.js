const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() =>
    console.log("connected to the DB...")).catch((err) => console.log(err))
