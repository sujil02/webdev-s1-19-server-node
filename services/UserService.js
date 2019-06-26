const userDao = require('../daos/UserDao');


const createUser = (user) =>
    userDao.createUser(user)

const findUserById = (userId) =>
    userDao.findUserById(userId)

const deleteUser = (userId) =>
    userDao.deleteUser(userId)

const updateUser = (userId, newUser) =>
    userDao.updateUser(userId, newUser)

const findUserByCredentials = (username, res) =>
    userDao.findUserByCredentials(username, res)

const findAllUsers = () =>
    userDao.findAllUsers()

module.exports = {
    createUser,
    findUserById,
    deleteUser,
    updateUser,
    findAllUsers,
    findUserByCredentials
};
