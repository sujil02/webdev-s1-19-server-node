const userDao = require('../daos/userDao');


const createUser = (user) =>
    userDao.createUser(user)

const findUserById = (userId) =>
    userDao.findUserById(userId)

const deleteUser = (userId) =>
    userDao.deleteUser(userId)

const updateUser = (userId, newUser) =>
    userDao.updateUser(userId, newUser)

module.exports = {
    createUser,
    findUserById,
    deleteUser,
    updateUser
};
