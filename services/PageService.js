const pageDao = require('../daos/later/PageDao');

const findPagesForWebsite = wid =>
    pageDao
        .findPagesForWebsite(wid)

const findPageById = pid =>
    pageDao
        .findPageById(pid)

module.exports = {
    findPagesForWebsite,
    findPageById
};
