const mongoose = require('mongoose')

const ColumnSchema = mongoose.Schema({
    title: String,
    span: {type: Number, default: 2},
    widgets: [{
        title: String,
        type: {type: String, default: 'HEADING', enum: ['HEADING', 'PARAGRAPH', 'YOUTUBE', 'HTML']},
        text: {type: String, default: 'New Heading Widget'},
        size: {type: Number, default: 2}
    }]
});

module.exports = ColumnSchema;
