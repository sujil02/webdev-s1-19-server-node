const mongoose = require('mongoose');
const RowSchema = require('./RowSchema');

const RowModel = mongoose.model('RowModel', RowSchema)

module.exports = RowModel
