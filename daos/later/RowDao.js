const websiteModel = require('../../models/WebsiteModel')

const findPagesForWebsite = wid =>
    websiteModel.find({_id: wid}, {'pages.title': 1, 'pages._id': 1})

module.exports = {
    findPagesForWebsite
};
