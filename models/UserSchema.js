const mongoose = require('mongoose')
const WebsiteSchema = require('./WebsiteSchema')

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName:String,
    websites: [WebsiteSchema]
});

module.exports = UserSchema;
