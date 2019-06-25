const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');

const UserModel = mongoose.model('UserModel', UserSchema)

module.exports = UserModel
