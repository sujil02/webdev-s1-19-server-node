const websiteModel = require('../../models/WebsiteModel')

const createWebsite = website =>
    websiteModel.create(website)

const findAllWebsites = () =>
    websiteModel.find();

module.exports = {
    createWebsite,
    findAllWebsites
};
