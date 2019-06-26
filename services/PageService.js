const pageDao = require('../daos/later/PageDao');

const findPagesForWebsite = wid =>
    pageDao
        .findPagesForWebsite(wid)

const findPageById = pid =>
    pageDao
        .findPageById(pid)

const deletePage = (websiteId,pageId) =>
    pageDao.deletePage(websiteId,pageId)

const updatePage = (websiteId, page) =>
    pageDao.updatePage(websiteId, page)


module.exports = {
    deletePage,
    updatePage,
    findPagesForWebsite,
    findPageById
};
