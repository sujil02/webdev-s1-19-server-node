const mongoose = require('mongoose')
const ColumnSchema = require('./ColumnSchema')
const ColumnModel = mongoose.model(
    'ColumnModel', ColumnSchema
);

module.exports = ColumnModel;
