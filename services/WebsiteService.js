const websiteDao = require('../daos/WebsiteDao');

const findAllWebsites = () =>
    websiteDao.findAllWebsites()

const createWebsite = (website) =>
    websiteDao.createWebsite(website)

const findWebsiteById = (websiteId) =>
    websiteDao.findWebsiteById(websiteId)

const deleteWebsite = (websiteId) =>
    websiteDao.deleteWebsite(websiteId)

const updateWebsite = (websiteId, newWebsite) =>
    websiteDao.updateWebsite(websiteId, newWebsite)

module.exports = {
    findAllWebsites,
    createWebsite,
    findWebsiteById,
    deleteWebsite,
    updateWebsite
};
