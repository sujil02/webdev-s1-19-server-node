const mongoose = require('mongoose');
const PageSchema = require('./PageSchema');

const PageModel = mongoose.model('PageModel', PageSchema)

module.exports = PageModel
