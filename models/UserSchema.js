const mongoose = require('mongoose')
const WebsiteSchema = require('./WebsiteSchema')

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName:String,
    websites: [WebsiteSchema],
}, {collection: 'users'});

module.exports = UserSchema;
